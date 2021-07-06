import React, { useContext } from "react";
import Context from "../context/Context";
import { useHistory } from "react-router-dom";
// import { GetSpecies } from "../util/GetSpecies";
import Speech from "speak-tts";
import Stats from "../components/pokemon/Stats";
import Abilities from "../components/pokemon/Abilities";
import Location from "../components/pokemon/Location";
import Evolution from "../components/pokemon/evolution/Evolution";
// import EvolutionTest from "../components/pokemon/EvolutionTest";
import Learnset from "../components/pokemon/learnset/Learnset";
import Types from "../components/Types";

import { useRequest, useRequestFullInfo } from "../hooks/useRequest";
import "../components/pokemon/Pokemon.scss";
// tts example
// https://codesandbox.io/s/rmloxx60q4?file=/src/index.js
const Pokemon = (props) => {
  const name = props.match.params.name;
  const pokeContext = useContext(Context);
  const { data: data1 } = useRequest(
    "/generation",
    pokeContext.generation === "all" ? 8 : pokeContext.generation
  );
  const { data } = useRequestFullInfo(name);

  const speech = new Speech();
  speech.init({
    volume: 0.5,
    lang: "en-GB",
    voice: "Google UK English Male",
  });
  let history = useHistory();
  const prevPage = () => {
    if (history.length > 2) {
      history.goBack();
    } else {
      history.push("/");
    }
  };

  // console.log(data);
  // const { data: data, error: error2 } = useRequest("/pokemon-species", name);
  // let defaultName = data.varieties.find((variety) => variety.is_default);
  // const { data: data, error: error1 } = useRequestFullUrl(
  //   defaultName.pokemon.url
  // );
  // if (error) {return <p>Something went wrong.</p>};
  if (!data) return null;
  if (!data1) return null;

  let genus = data.genera
    .filter((entry) => entry.language.name === "en")
    .map((text) => text.genus);
  let exerpt = data.flavor_text_entries
    .filter((entry) => entry.language.name === "en")
    //.filter((version) => version.name === "red")
    .map((text) => text.flavor_text);
  const newLineText = (text) => {
    const newText = text.replace("\n", " ").replace("\f", " ");
    return newText;
  };
  const onClickSpeak = () => {
    speech
      .speak({
        text: `${name.replace("etchd", "etched")}, a ${genus[0].replace(
          "Evolution",
          "avolution"
        )}. ${exerpt[exerpt.length - 1]
          .replace("POKéMON", "Pokemon")
          .replace("etch’d", "etched")
          .replace("evolution", "avolution")}`,
      })
      .catch((e) => console.log("error:", e));
  };
  // console.log(exerpt[exerpt.length - 1]);
  // console.log(data);
  return (
    <Context.Consumer>
      {(value) => (
        <>
          <div className={`masthead ${data.types[0].type.name}`}>
            <div className="container">
              <header className="row align-items-center justify-content-between">
                <div className="col">
                  <button
                    onClick={() => prevPage()}
                    className="btn btn-link p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.2971,11.707085 L0.59,7.999975 L4.2971,4.292875 C4.6876,3.902375 5.3208,3.902375 5.7113,4.292875 C6.10183,4.683375 6.10183,5.316575 5.7113,5.707075 L4.4184,6.999975 L14.0042,6.999975 C14.55649,6.999975 15.0042,7.447695 15.0042,7.999975 C15.0042,8.552255 14.55649,8.999975 14.0042,8.999975 L4.4184,8.999975 L5.7113,10.292865 C6.10183,10.683395 6.10183,11.316555 5.7113,11.707085 C5.3208,12.097605 4.6876,12.097605 4.2971,11.707085 Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="col text-end">
                  <div className="d-flex justify-content-end align-items-baseline">
                    <p className="mb-0 text-muted">
                      #
                      {data.id.toLocaleString("en", {
                        minimumIntegerDigits: 3,
                      })}
                    </p>
                    <div className="d-flex flex-column align-items-end">
                      <h1 className="mb-0 ms-2 text-capitalize">{name}</h1>
                      <ul className="list-inline mb-0 d-flex">
                        {data.types.map((type) => (
                          <li key={type.type.name} className="list-inline-item">
                            <Types type={type.type.name} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </header>

              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-6">
                  <img
                    width={250}
                    height={250}
                    src={data.sprites["front_default"]}
                    alt={name}
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col text-center mb-3">
                <button
                  className="btn btn-sm btn-light rounded-circle"
                  style={{ top: "50%", right: "0px" }}
                  onClick={onClickSpeak}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.5 8H4C3.44772 8 3 8.44772 3 9V15C3 15.5523 3.44772 16 4 16H9.5L16 21V3L9.5 8Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 9.35425C20.6224 10.0594 21 10.9856 21 12.0001C21 13.0145 20.6224 13.9408 20 14.6459"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col text-center">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-4">
                    <p className="mb-0">
                      <strong
                        dangerouslySetInnerHTML={{
                          __html: newLineText(genus[0]),
                        }}
                      />
                    </p>
                  </li>
                  <li className="list-inline-item me-4">
                    Ht: {(data.height * 0.3280839895).toFixed(2)} ft
                  </li>
                  <li className="list-inline-item me-4">
                    Wt: {(data.weight * 0.220462).toFixed(1)} lbs
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <p
                  dangerouslySetInnerHTML={{
                    __html: newLineText(exerpt[exerpt.length - 1]),
                  }}
                  className="mb-5"
                />
              </div>
            </div>
            <Evolution apiPath={data.evolution_chain.url} />
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <h3 className="h5 mt-5 fw-bold text-center text-md-start">
                  Base Stats
                </h3>
                <Stats data={data.stats} />
                <h3 className="h5 mt-5 fw-bold text-center text-md-start">
                  Where to find
                </h3>
                {value.generation < 7 ? (
                  <Location data={name} />
                ) : (
                  <div className="card pokemon-card text-center">
                    <div className="card-body">
                      <p className="mb-0">Data not available</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="col">
                <h3 className="h5 mt-5 fw-bold text-center text-md-start">
                  Abilities
                </h3>

                {data.abilities.map((ability) => (
                  <Abilities key={ability.ability.url} data={ability} />
                ))}

                <h3 className="h5 mt-5 fw-bold text-center text-md-start">
                  Learnset
                </h3>
                <Learnset version={data1.version_groups} moves={data.moves} />
              </div>
            </div>
          </div>
        </>
      )}
    </Context.Consumer>
  );
};

export default Pokemon;
