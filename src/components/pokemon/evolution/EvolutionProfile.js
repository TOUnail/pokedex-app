import React from "react";
import { Link } from "react-router-dom";
import { useRequest } from "../../../hooks/useRequest";
const EvolutionProfile = (props) => {
  const name = props.pokemon;
  const url = props.url.split("/");
  const formatUrl = url.slice(-2, -1)[0];
  //console.log(formatUrl);
  const { data, error } = useRequest("/pokemon", formatUrl);
  if (error) return <p>Something went wrong</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <Link className="text-reset text-decoration-none" to={`/pokemon/${name}`}>
      <img
        className="img-fluid"
        src={data.sprites["front_default"]}
        alt={name}
        style={{ imageRendering: "pixelated" }}
      />
      <p className="mb-0 text-capitalize">{name}</p>
    </Link>
  );
};

export default EvolutionProfile;
