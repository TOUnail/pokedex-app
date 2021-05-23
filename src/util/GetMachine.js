import React from "react";
import { useRequest } from "../hooks/useRequest";

const GetMachine = (props) => {
  const { data, error } = useRequest("/machine", props.number);
  if (error) return null;
  if (!data) return <span>Loading</span>;
  return data.item.name;
};

export default GetMachine;
