import React from "react";
import { useRequest } from "../../hooks/useRequest";

const Abilities = (props) => {
  const { data, error } = useRequest("/ability", props.data.ability.name);
  if (error) return <p>Something went wrong</p>;
  if (!data) return <p>Loading...</p>;
  console.log(data);
  return (
    <div>
      <p>{props.data.ability.name}</p>
    </div>
  );
};

export default Abilities;
