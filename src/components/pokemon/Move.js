import React from "react";
import { useRequest } from "../../hooks/useRequest";

const Move = (props) => {
  const { data, error } = useRequest("/move", props.move);
  if (error) return <p>Something went wrong</p>;
  if (!data) return <p>Loading...</p>;
  console.log(data);
  return <div>move</div>;
};

export default Move;
