import React from "react";
import EvolutionProfile from "./EvolutionProfile";
import EvolutionDetails from "./EvolutionDetails";

import { useRequest } from "../../../hooks/useRequest";

const Evolution = (props) => {
  let splitUrl = props.apiPath.split("/");
  const evolutionChain = splitUrl.slice(-2, -1)[0];
  const { data, error } = useRequest("/evolution-chain", evolutionChain);
  if (error) return <p>Something went wrong</p>;
  if (!data) return <p>Loading...</p>;
  let base = data.chain.species;
  let firstEvolution =
    data.chain.evolves_to.length > 0 ? data.chain.evolves_to : undefined;
  let secondEvolution;
  // console.log(data);
  if (data.chain.evolves_to[0] !== undefined) {
    if (data.chain.evolves_to[0].evolves_to[0] !== undefined) {
      secondEvolution = data.chain.evolves_to[0].evolves_to;
    }
  }
  // reference: https://pokemondb.net/evolution
  return (
    <>
      <div className="row">
        <div className="col">
          <h3 className="h5 fw-bold text-center text-md-start">Evolution</h3>
        </div>
      </div>
      <div className="row justify-content-center align-items-stretch text-center">
        {firstEvolution ? (
          <>
            <div className="col align-self-center">
              <EvolutionProfile pokemon={base.name} url={base.url} />
            </div>
            {/* Start Arrow */}
            <div className="col d-flex flex-column justify-content-around">
              {firstEvolution.length > 1
                ? firstEvolution.map((pokemon, index) => (
                    <EvolutionDetails
                      key={`${pokemon.species.name}-arrow-${index}`}
                      details={pokemon.evolution_details[0]}
                    />
                  ))
                : firstEvolution.map((pokemon, index) => (
                    <EvolutionDetails
                      key={`${pokemon.species.name}-arrow-${index}`}
                      details={pokemon.evolution_details[0]}
                    />
                  ))}
            </div>
            {/* End Arrow */}
            <div className="col align-self-center">
              {firstEvolution.length > 1
                ? firstEvolution.map((pokemon) => (
                    <div key={pokemon.species.name} className="row">
                      <div className="col">
                        <EvolutionProfile
                          pokemon={pokemon.species.name}
                          url={pokemon.species.url}
                        />
                      </div>
                    </div>
                  ))
                : firstEvolution.map((pokemon) => (
                    <EvolutionProfile
                      key={pokemon.species.name}
                      pokemon={pokemon.species.name}
                      url={pokemon.species.url}
                    />
                  ))}
            </div>
            {secondEvolution && (
              <>
                {/* Start Arrow */}
                <div className="col d-flex flex-column justify-content-around">
                  {secondEvolution.length > 1
                    ? secondEvolution.map((pokemon, index) => (
                        <EvolutionDetails
                          key={`${pokemon.species.name}-arrow-${index}`}
                          details={pokemon.evolution_details[0]}
                        />
                      ))
                    : secondEvolution.map((pokemon, index) => (
                        <EvolutionDetails
                          key={`${pokemon.species.name}-arrow-${index}`}
                          details={pokemon.evolution_details[0]}
                        />
                      ))}
                </div>
                {/* End Arrow */}
                <div className="col">
                  {secondEvolution.length > 1
                    ? secondEvolution.map((pokemon) => (
                        <div key={pokemon.species.name} className="row">
                          <div className="col">
                            <EvolutionProfile
                              pokemon={pokemon.species.name}
                              url={pokemon.species.url}
                            />
                          </div>
                        </div>
                      ))
                    : secondEvolution.map((pokemon) => (
                        <EvolutionProfile
                          key={pokemon.species.name}
                          pokemon={pokemon.species.name}
                          url={pokemon.species.url}
                        />
                      ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="col text-center">
            <div className="card pokemon-card text-center">
              <div className="card-body">
                <p className="mb-0">This Pokemon does not evolve.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Evolution;
