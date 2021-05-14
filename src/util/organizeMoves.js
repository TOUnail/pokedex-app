export const lvlUpMoves = (moves, generation) => {
  let results = moves.filter((move) =>
    move.version_group_details.some(
      (r) =>
        r.move_learn_method.name === "level-up" &&
        r.version_group.name === generation
    )
  );

  // let genResults = moves.filter((gen) =>
  //   gen.version_group_details.some((r) => r.version_group.name === generation)
  // );
  // let lvlUpResults = genResults.filter((gen) =>
  //   gen.version_group_details.some((r) => r.move_learn_method === "level-up")
  // );
  // console.log(genResults);
  // console.log(
  //   genResults.map((r) =>
  //     r.version_group_details.findIndex(
  //       (re) =>
  //         re.version_group.name === generation && re.level_learned_at !== 0
  //     )
  //   )
  // );

  // let results = lvlUpResults.filter(
  //   (move) =>
  //     move.version_group_details[
  //       move.version_group_details.findIndex(
  //         (ver) => ver.version_group.name === generation
  //       )
  //     ].level_learned_at !== 0
  // );

  return results;
};

export const machineMoves = (moves, generation) => {
  let results = moves.filter((gen) =>
    gen.version_group_details.some(
      (r) =>
        r.version_group.name === generation &&
        r.move_learn_method.name === "machine"
    )
  );

  // console.log(genResults);

  // let results = genResults.filter(
  //   (move) =>
  //     move.version_group_details[
  //       move.version_group_details.findIndex(
  //         (ver) => ver.version_group.name === generation
  //       )
  //     ].move_learn_method.name === "machine"
  // );
  return results;
};

export const getLastSectionEndpoint = (url) => {
  let result = url
    .slice(0, -1)
    .replace("https://pokeapi.co/api/v2/machine/", "");
  return result;
};
