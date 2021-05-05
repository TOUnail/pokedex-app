import React from "react";
import EvolutionProfile from "./EvolutionProfile";
import EvolutionDetails from "./EvolutionDetails";

import { useRequest } from "../../hooks/useRequest";

const Evolution = (props) => {
  let splitUrl = props.apiPath.split("/");
  const evolutionChain = splitUrl.slice(-2, -1)[0];
  const { data, error } = useRequest("/evolution-chain", evolutionChain);
  if (error) return <p>Something went wrong</p>;
  if (!data) return <p>Loading...</p>;
  let base = data.chain.species.name;
  let firstEvolution =
    data.chain.evolves_to.length > 0 ? data.chain.evolves_to : undefined;
  let secondEvolution;
  console.log(data);
  if (data.chain.evolves_to[0] !== undefined) {
    if (data.chain.evolves_to[0].evolves_to[0] !== undefined) {
      secondEvolution = data.chain.evolves_to[0].evolves_to;
    }
  }
  return (
    <div className="row justify-content-center align-items-stretch text-center">
      {firstEvolution ? (
        <>
          <div className="col align-self-center">
            <EvolutionProfile pokemon={base} />
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
                      <EvolutionProfile pokemon={pokemon.species.name} />
                    </div>
                  </div>
                ))
              : firstEvolution.map((pokemon) => (
                  <EvolutionProfile
                    key={pokemon.species.name}
                    pokemon={pokemon.species.name}
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
                          <EvolutionProfile pokemon={pokemon.species.name} />
                        </div>
                      </div>
                    ))
                  : secondEvolution.map((pokemon) => (
                      <EvolutionProfile
                        key={pokemon.species.name}
                        pokemon={pokemon.species.name}
                      />
                    ))}
              </div>
            </>
          )}
          {/* <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="#000000"
                fillRule="evenodd"
                d="M11.7071,4.29289 L15.4142,8 L11.7071,11.7071 C11.3166,12.0976 10.6834,12.0976 10.2929,11.7071 C9.90237,11.3166 9.90237,10.6834 10.2929,10.2929 L11.5858,9 L2,9 C1.44771,9 1,8.55228 1,8 C1,7.44772 1.44771,7 2,7 L11.5858,7 L10.2929,5.70711 C9.90237,5.31658 9.90237,4.68342 10.2929,4.29289 C10.6834,3.90237 11.3166,3.90237 11.7071,4.29289 Z"
              />
            </svg>
            <EvolutionDetails details={firstEvolution.evolution_details[0]} />
          </div>
          <div className="col">
            {firstEvolution.map((pokemon) => pokemon.species.name)}
          </div>
          {secondEvolution && (
            <>
              <div className="col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#000000"
                    fillRule="evenodd"
                    d="M11.7071,4.29289 L15.4142,8 L11.7071,11.7071 C11.3166,12.0976 10.6834,12.0976 10.2929,11.7071 C9.90237,11.3166 9.90237,10.6834 10.2929,10.2929 L11.5858,9 L2,9 C1.44771,9 1,8.55228 1,8 C1,7.44772 1.44771,7 2,7 L11.5858,7 L10.2929,5.70711 C9.90237,5.31658 9.90237,4.68342 10.2929,4.29289 C10.6834,3.90237 11.3166,3.90237 11.7071,4.29289 Z"
                  />
                </svg>
                <EvolutionDetails
                  details={secondEvolution.evolution_details[0]}
                />
              </div>
              <div className="col">
                {secondEvolution.map((pokemon) => {
                  return <div className="d-block">{pokemon.species.name}</div>;
                })}
              </div>
            </>
          )} */}
        </>
      ) : (
        <div className="col text-center">
          <p>does not evolve</p>
        </div>
      )}
    </div>
  );
};

export default Evolution;
