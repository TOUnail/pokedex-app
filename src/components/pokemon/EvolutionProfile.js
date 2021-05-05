import React from "react";
import { useRequest } from "../../hooks/useRequest";
const EvolutionProfile = (props) => {
  const name = props.pokemon;
  const { data, error } = useRequest("/pokemon", name);
  if (error) return <p>Something went wrong</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <>
      <img
        className="img-fluid"
        src={data.sprites["front_default"]}
        alt={name}
        style={{ imageRendering: "pixelated" }}
      />
      <p className="mb-0 text-capitalize">{name}</p>
    </>
  );
};

export default EvolutionProfile;
