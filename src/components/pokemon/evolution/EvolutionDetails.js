import React from "react";
import { stoneToImage } from "../../../util/stoneToImage";

const EvolutionDetails = (props) => {
  // console.log(props);
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
  // console.log(props.details);
  return (
    <div>
      <ul className="list-unstyled m-0">
        {gender && <li>gender</li>}
        {held_item && <li>held item</li>}
        {item ? <li>{stoneToImage(item.name)}</li> : null}

        {known_move && <li>known move</li>}
        {known_move_type && <li>known move type</li>}
        {location && <li>location</li>}
        {min_affection && <li>affection</li>}
        {min_beauty && <li>beauty</li>}
        {min_happiness && <li>happiness</li>}
        {min_level && (
          <li>
            <p className="mb-0">
              <small>Lvl {min_level}</small>
            </p>
          </li>
        )}
        {needs_overworld_rain === true && <li>rain</li>}
        {party_species && <li>party species</li>}
        {party_type && <li>party type</li>}
        {relative_physical_stats && <li>relative physical</li>}
        {time_of_day && <li>time</li>}
        {trade_species && <li>trade</li>}
        {turn_upside_down === true && <li>Turn Upside Down</li>}
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          fill="#000000"
          fillRule="evenodd"
          d="M11.7071,4.29289 L15.4142,8 L11.7071,11.7071 C11.3166,12.0976 10.6834,12.0976 10.2929,11.7071 C9.90237,11.3166 9.90237,10.6834 10.2929,10.2929 L11.5858,9 L2,9 C1.44771,9 1,8.55228 1,8 C1,7.44772 1.44771,7 2,7 L11.5858,7 L10.2929,5.70711 C9.90237,5.31658 9.90237,4.68342 10.2929,4.29289 C10.6834,3.90237 11.3166,3.90237 11.7071,4.29289 Z"
        />
      </svg>
    </div>
  );
};

export default EvolutionDetails;
