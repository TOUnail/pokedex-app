import React from "react";
import { lvlUpMoves, machineMoves } from "../../util/organizeMoves";
import Move from "./Move";
import MachineMove from "./MachineMove";

const Learnset = (props) => {
  const allMoves = props.moves;
  // const sortedLvlUpMoves = lvlUpMoves(allMoves, 0);
  // console.log(sortedLvlUpMoves);
  // const lvlUpMoves = allMoves.filter(
  //   (move) => move.version_group_details[0].level_learned_at !== 0
  // );
  // const machineMoves = allMoves.filter(
  //   (move) => move.version_group_details[0].move_learn_method.name === "machine"
  // );
  //   console.log("lvlup");
  //   console.log(lvlUpMoves);
  // console.log("machine");
  // console.log(machineMoves);
  // console.log(allMoves);
  return (
    <>
      <h5>By level</h5>
      <table className="table table-hover table-sm align-middle">
        <thead>
          <tr>
            <th>Level</th>
            <th>Move</th>
            <th>Type</th>
            <th>Power</th>
            <th>Accuracy</th>
            <th>PP</th>
          </tr>
        </thead>
        <tbody>
          {lvlUpMoves(allMoves, 0)
            .sort((a, b) =>
              a.version_group_details[0].level_learned_at >
              b.version_group_details[0].level_learned_at
                ? 1
                : -1
            )
            .map((move) => (
              <Move
                key={`learn-${move.move.name}`}
                move={move.move.name}
                level={move.version_group_details[0].level_learned_at}
              />
            ))}
        </tbody>
      </table>
      <h5>By TM/HM</h5>
      <table className="table table-hover table-sm align-middle">
        <tbody>
          {machineMoves(allMoves, "red-blue")
            .sort((a, b) => (a.move.name > b.move.name ? 1 : -1))
            .map((move) => {
              return (
                <MachineMove
                  key={`machine-${move.move.name}`}
                  move={move.move.name}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Learnset;
