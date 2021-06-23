import React, { useState } from "react";
import Types from "../Types";
import { Link } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";

const PokemonCard = ({ pokemon }) => {
  const [imgLoading, setImgLoading] = useState(true);
  const imageLoaded = () => {
    setImgLoading(false);
  };
  const { name } = pokemon;
  const index = pokemon.url.split("/").filter(Boolean).pop();
  // console.log(index);
  const { data, error } = useRequest("/pokemon", index);
  if (error) return <p>Something went wrong.</p>;
  if (!data) return null;
  return (
    <div className="col">
      <Link className="text-decoration-none" to={`/pokemon/${name}`}>
        <div className="card rounded-0 pokemon-card">
          <div className="card-body d-flex justify-content-between align-items-center py-0">
            <div className="d-flex align-items-center">
              <figure
                className="img-wrapper m-0 d-flex justify-content-center align-items-center"
                style={{ width: "96px", height: "96px" }}
              >
                {imgLoading && (
                  <div
                    className="spinner-border text-secondary p-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
                <img
                  src={data.sprites["front_default"]}
                  alt={name}
                  onLoad={imageLoaded}
                  style={{
                    display: imgLoading ? "none" : "block",
                    imageRendering: "pixelated",
                  }}
                />
              </figure>
              <p className="mb-0 text-capitalize">
                {name}
                <br />
                <span className="text-muted">
                  #{data.id.toLocaleString("en", { minimumIntegerDigits: 3 })}
                </span>
              </p>
            </div>
            <ul className="list-inline mb-0 d-flex">
              {data.types.map((type) => (
                <li key={type.type.name} className="list-inline-item">
                  <Types type={type.type.name} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
