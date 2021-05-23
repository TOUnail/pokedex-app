import React from "react";
import GetMachine from "../../../util/GetMachine";
import Types from "../../Types";
import { useRequest } from "../../../hooks/useRequest";
import { getLastSectionEndpoint } from "../../../util/organizeMoves";

const MachineMove = (props) => {
  const { data: moveData, error: moveError } = useRequest("/move", props.move);
  if (moveError) return null;
  if (!moveData)
    return (
      <tr>
        <td>Loading</td>
      </tr>
    );
  let tmHm = getLastSectionEndpoint(moveData.machines[0].machine.url);
  return (
    <tr>
      <td className="text-uppercase">
        <GetMachine number={tmHm} />
      </td>
      <td className="text-capitalize">{moveData.name.replace("-", " ")}</td>
      <td>
        <Types type={moveData.type.name} />
      </td>
      <td>
        {moveData.power === null ? String.fromCharCode(8212) : moveData.power}
      </td>
      <td>
        {moveData.accuracy === null
          ? String.fromCharCode(8212)
          : `${moveData.accuracy}%`}
      </td>
      <td>{moveData.pp}</td>
    </tr>
  );
};

export default MachineMove;
