import React from "react";
import Type from "../Types";
import { Link } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";

const PokemonCard = ({ pokemon }) => {
  const { name } = pokemon;
  const { data, error } = useRequest("/pokemon", name);
  if (error) return <p>Something went wrong.</p>;
  if (!data) return null;
  return (
    <div className="col mb-lg-3">
      <Link className="text-decoration-none" to={`/pokemon/${name}`}>
        <div className="card rounded-0 pokemon-card">
          <div className="card-body d-flex justify-content-between align-items-center py-0">
            <div className="d-flex align-items-center">
              <img src={data.sprites["front_default"]} alt={name} />
              <p className="mb-0 text-capitalize">
                {name}
                <br />
                <span className="text-muted">
                  #{data.id.toLocaleString("en", { minimumIntegerDigits: 3 })}
                </span>
              </p>
            </div>

            <Type keyName={name} type={data.types} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
