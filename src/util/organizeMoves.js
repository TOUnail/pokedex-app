export const lvlUpMoves = (moves, generation) => {
  let results = moves.filter(
    (move) => move.version_group_details[generation].level_learned_at !== 0
  );
  return results;
};

export const machineMoves = (moves, generation) => {
  let testResults = moves.filter((gen) =>
    gen.version_group_details.some((r) => r.version_group.name === generation)
  );
  let results = testResults.filter(
    (move) =>
      move.version_group_details[
        move.version_group_details.findIndex(
          (ver) => ver.version_group.name === generation
        )
      ].move_learn_method.name === "machine"
  );
  return results;
};

export const getLastSectionEndpoint = (url) => {
  let result = url
    .slice(0, -1)
    .replace("https://pokeapi.co/api/v2/machine/", "");
  return result;
};
