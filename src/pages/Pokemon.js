import React from "react";
import { useHistory } from "react-router-dom";
import Speech from "speak-tts";
import Stats from "../components/pokemon/Stats";
import Abilities from "../components/pokemon/Abilities";
import Evolution from "../components/pokemon/Evolution";
import Types from "../components/Types";

import { useRequest } from "../hooks/useRequest";
import "../components/pokemon/Pokemon.scss";
// tts example
// https://codesandbox.io/s/rmloxx60q4?file=/src/index.js
const Pokemon = (props) => {
  const name = props.match.params.name;
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
  const { data: data1, error: error1 } = useRequest("/pokemon", name);
  const { data: data2, error: error2 } = useRequest("/pokemon-species", name);
  if (error1 || error2) return <p>Something went wrong.</p>;
  if (!data1 || !data2) return null;
  let genus = data2.genera
    .filter((entry) => entry.language.name === "en")
    .map((text) => text.genus);
  let exerpt = data2.flavor_text_entries
    .filter((entry) => entry.language.name === "en")
    .map((text) => text.flavor_text);
  const newLineText = (text) => {
    const newText = text.replace("\n", " ").replace("\f", " ");
    return newText;
  };
  const onClickSpeak = () => {
    speech
      .speak({
        text: `${name}, a ${genus[0]}. ${exerpt[0]}`,
      })
      .catch((e) => console.log("error:", e));
  };
  // console.log(data1);
  // console.log(data2);
  return (
    <>
      <div className={`masthead ${data1.types[0].type.name}`}>
        <div className="container">
          <header className="row align-items-center justify-content-between">
            <div className="col">
              <button onClick={() => prevPage()} className="btn btn-link p-0">
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
                  #{data1.id.toLocaleString("en", { minimumIntegerDigits: 3 })}
                </p>
                <div className="d-flex flex-column align-items-end">
                  <h1 className="mb-0 ms-2 text-capitalize">{name}</h1>
                  <Types keyName={name} type={data1.types} />
                </div>
              </div>
            </div>
          </header>

          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-6">
              <img
                width={250}
                height={250}
                src={data1.sprites["front_default"]}
                alt={name}
                style={{ imageRendering: "pixelated" }}
                onClick={onClickSpeak}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
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
                Ht: {(data1.height * 0.3280839895).toFixed(2)} ft
              </li>
              <li className="list-inline-item me-4">
                Wt: {(data1.weight * 0.220462).toFixed(1)} lbs
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p
              dangerouslySetInnerHTML={{
                __html: newLineText(exerpt[0]),
              }}
              className="mb-5"
            />
            {/* <p
              dangerouslySetInnerHTML={{
                __html: newLineText(data2.flavor_text_entries[0].flavor_text),
              }}
            /> */}
          </div>
        </div>
        {/* Start Evolution */}
        <Evolution apiPath={data2.evolution_chain.url} />
        {/* End Evolution */}
        {/* Start Stats */}
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <h3>Base Stats</h3>
            <Stats data={data1.stats} />
          </div>
          <div className="col">
            <h3>Abilities</h3>

            {data1.abilities.map((ability) => (
              <Abilities key={ability.ability.url} data={ability} />
            ))}
          </div>
        </div>
        {/* End Stats */}
      </div>
    </>
  );
};

export default Pokemon;
