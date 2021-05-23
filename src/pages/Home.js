import React, { useRef } from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import PokemonCard from "../components/home/PokemonCard";
import { useSWRInfinite } from "swr";
// import useOnScreen from "../hooks/useOnScreen";
// import { useRequest } from "../hooks/useRequest";
import "../components/home/Home.scss";

const Home = () => {
  // const { data: result, error } = useRequest("/pokemon");
  // if (error) return <p>Something went wrong.</p>;
  // if (!result) return <p>Loading...</p>;
  const ref = useRef(null);
  const PAGE_SIZE = 21;
  const { data, error, size, setSize } = useSWRInfinite(
    (index) =>
      `https://pokeapi.co/api/v2/pokemon/?offset=${
        PAGE_SIZE * index
      }&limit=${PAGE_SIZE}`,
    { persistSize: true }
  );
  // const isVisible = useOnScreen(ref, "200px");
  const result = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 20);

  const searchSubmit = (term) => {
    console.log(term);
  };
  // useEffect(() => {
  //   if (isVisible && !isReachingEnd) {
  //     setSize(size + 1);
  //   }
  // }, [isVisible]); // eslint-disable-line
  return (
    <>
      <Header searchTerm={searchSubmit} />
      <div className="container-md home-container">
        <div className="row row-cols-1 row-cols-md-3 gx-0 g-lg-3">
          {result.map((r) =>
            r.results.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))
          )}
        </div>
        <div className="row gx-0 gx-lg-3 justify-content-center">
          <div className="col" ref={ref}>
            <button
              className="d-block w-100 btn py-4"
              disabled={isLoadingMore || isReachingEnd}
              onClick={() => setSize(size + 1)}
            >
              {isLoadingMore
                ? "Loading"
                : isReachingEnd
                ? "No More Pokémon"
                : "Load More Pokémon"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
