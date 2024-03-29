import React from "react";
import { useRequest } from "../../../hooks/useRequest";
import Types from "../../Types";

const Move = (props) => {
  const { data, error } = useRequest("/move", props.move);
  if (error)
    return (
      <tr>
        <td>Something went wrong</td>
      </tr>
    );
  if (!data)
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  return (
    <>
      <tr>
        <td>{props.level}</td>
        <td className="text-capitalize">{data.name.replace("-", " ")}</td>
        <td>
          <Types type={data.type.name} />
        </td>
        <td>{data.power === null ? String.fromCharCode(8212) : data.power}</td>
        <td>
          {data.accuracy === null
            ? String.fromCharCode(8212)
            : `${data.accuracy}%`}
        </td>
        <td>{data.pp}</td>
      </tr>
    </>
  );
};

export default Move;
