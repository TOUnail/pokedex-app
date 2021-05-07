import React from "react";
import Move from "./Move";

const Learnset = (props) => {
  const allMoves = props.moves;
  const lvlUpMoves = allMoves.filter(
    (move) => move.version_group_details[0].level_learned_at !== 0
  );
  const machineMoves = allMoves.filter(
    (move) => move.version_group_details[0].move_learn_method.name === "machine"
  );
  //   console.log("lvlup");
  //   console.log(lvlUpMoves);
  //   console.log("machine");
  //   console.log(machineMoves);
  return (
    <div>
      {lvlUpMoves
        .sort((a, b) =>
          a.version_group_details[0].level_learned_at >
          b.version_group_details[0].level_learned_at
            ? 1
            : -1
        )
        .map((move) => (
          <Move move={move.move.name} />
        ))}
    </div>
  );
};

export default Learnset;
