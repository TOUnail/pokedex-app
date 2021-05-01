import React from "react";

const EvolutionDetails = (props) => {
  let {
    gender,
    held_item,
    item,
    known_move,
    known_move_type,
    location,
    min_affection,
    min_beauty,
    min_happiness,
    min_level,
    needs_overworld_rain,
    party_species,
    party_type,
    relative_physical_stats,
    time_of_day,
    trade_species,
    turn_upside_down,
  } = props.details;
  return (
    <ul className="list-unstyled">
      {gender && <li>true</li>}
      {held_item && <li>true</li>}
      {item && <li>true</li>}
      {known_move && <li>true</li>}
      {known_move_type && <li>true</li>}
      {location && <li>true</li>}
      {min_affection && <li>true</li>}
      {min_beauty && <li>true</li>}
      {min_happiness && <li>true</li>}
      {min_level && <li>true</li>}
      {needs_overworld_rain === true && <li>true</li>}
      {party_species && <li>true</li>}
      {party_type && <li>true</li>}
      {relative_physical_stats && <li>true</li>}
      {time_of_day && <li>true</li>}
      {trade_species && <li>true</li>}
      {turn_upside_down === true && <li>Turn Upside Down</li>}
    </ul>
  );
};

export default EvolutionDetails;
