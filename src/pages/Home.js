import React from "react";
import PokemonCard from "../components/home/PokemonCard";
import { useRequest } from "../hooks/useRequest";

const Home = () => {
  const { data: result, error } = useRequest("/pokemon");
  if (error) return <p>Something went wrong.</p>;
  if (!result) return <p>Loading...</p>;

  return (
    <div className="container-md home-container">
      <div className="row row-cols-1 row-cols-md-3 gx-0 gx-lg-3">
        {result.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
        {/* {listPokemon.map((item) => {
          return (
            <div className="col mb-lg-3">
              <Link to={"/"}>
                <div className="card rounded-0 pokemon-card">
                  <div className="card-body">
                    {item.pokemon_entries.entry_number}
                  </div>
                </div>
              </Link>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Home;
