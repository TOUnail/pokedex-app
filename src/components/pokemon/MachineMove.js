import React from "react";
import GetMachine from "./GetMachine";
import { useRequest } from "../../hooks/useRequest";
import { getLastSectionEndpoint } from "../../util/organizeMoves";

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
  // let tmHm;
  // if (moveData) {
  //   tmHm = getLastSectionEndpoint(moveData.machines[0].machine.url);
  //   const { data: tmHmData, error: tmHmError } = useRequest("/machine", tmHm);
  //   if (tmHmError) return null;
  //   if (!tmHmData)
  //     return (
  //       <tr>
  //         <td>Loading</td>
  //       </tr>
  //     );

  //   console.log(tmHmData);
  // }
  //   const { data: machineData, error: machineError } = useRequest(
  //     "/machine",
  //     getLastSectionEndpoint(props.machine)
  //   );
  //   if (moveError || machineError)
  //     return (
  //       <tr>
  //         <td>Something went wrong.</td>
  //       </tr>
  //     );
  //   if (!moveData || !machineData) return null;
  //   console.log("move");
  // console.log(moveData);
  //   console.log("machine");
  //   console.log(machineData);
  return (
    <tr>
      <td className="text-uppercase">
        <GetMachine number={tmHm} />
      </td>
      <td>{moveData.name}</td>
    </tr>
  );
};

export default MachineMove;
