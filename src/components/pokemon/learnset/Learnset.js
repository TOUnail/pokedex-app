import React, { useState, useEffect, useContext } from "react";
import { lvlUpMoves, machineMoves } from "../../../util/organizeMoves";
import Context from "../../../context/Context";
import Move from "./Move";
import MachineMove from "./MachineMove";

const Learnset = (props) => {
  const learnSetContext = useContext(Context);
  const [lvlMoves, setLvlMoves] = useState([]);
  const [machMoves, setMachMoves] = useState([]);
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
  useEffect(() => {
    setLvlMoves(lvlUpMoves(allMoves, learnSetContext.generation));
    setMachMoves(machineMoves(allMoves, learnSetContext.generation));
  }, [allMoves, learnSetContext.generation]);
  return (
    <Context.Consumer>
      {(value) => (
        <>
          {lvlMoves.length > 0 && (
            <>
              <h5>By level</h5>
              <table className="table table-hover table-sm align-middle learnset">
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
                  {lvlMoves
                    .sort((a, b) =>
                      a.version_group_details[
                        a.version_group_details.findIndex(
                          (ver) => ver.version_group.name === value.generation
                        )
                      ].level_learned_at >
                      b.version_group_details[
                        b.version_group_details.findIndex(
                          (ver) => ver.version_group.name === value.generation
                        )
                      ].level_learned_at
                        ? 1
                        : -1
                    )
                    .map((move) => (
                      <Move
                        key={`learn-${move.move.name}`}
                        move={move.move.name}
                        level={
                          move.version_group_details[
                            move.version_group_details.findIndex(
                              (ver) =>
                                ver.version_group.name === value.generation
                            )
                          ].level_learned_at
                        }
                      />
                    ))}
                </tbody>
              </table>
            </>
          )}
          {machMoves.length > 0 && (
            <>
              <h5>By TM/HM</h5>
              <table className="table table-hover table-sm align-middle learnset">
                <thead>
                  <tr>
                    <th>TH/HM</th>
                    <th>Move</th>
                    <th>Type</th>
                    <th>Power</th>
                    <th>Accuracy</th>
                    <th>PP</th>
                  </tr>
                </thead>
                <tbody>
                  {machMoves
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
          )}
        </>
      )}
    </Context.Consumer>
  );
};

export default Learnset;
