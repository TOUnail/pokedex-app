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
    trigger,
  } = props.details;
  // console.log(props.details);
  return (
    <div>
      <ul className="list-unstyled m-0">
        {gender && (
          <li>
            {gender === 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ height: "15px" }}
                className="mb-2"
              >
                <path
                  d="M15 15.5C15 19.0899 12.0899 22 8.5 22C4.91015 22 2 19.0899 2 15.5C2 11.9101 4.91015 9 8.5 9C12.0899 9 15 11.9101 15 15.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 2H22V9"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 10.5L22 2"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {gender === 2 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ height: "15px" }}
                className="mb-2"
              >
                <path
                  d="M18.5 8.5C18.5 12.0899 15.5899 15 12 15C8.41015 15 5.5 12.0899 5.5 8.5C5.5 4.91015 8.41015 2 12 2C15.5899 2 18.5 4.91015 18.5 8.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 19H16.5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22L12 15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </li>
        )}
        {held_item && (
          <li>
            <p className="mb-0" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                holding {held_item.name.replace("-", " ")}
              </small>
            </p>
          </li>
        )}
        {item ? <li>{stoneToImage(item.name)}</li> : null}

        {known_move && (
          <li>
            <p className="mb-0 lh-1" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                knows {known_move.name.replace("-", " ")}
              </small>
            </p>
          </li>
        )}
        {known_move_type && (
          <li>
            <p className="mb-0 lh-1" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                knows {known_move_type.name}-type move
              </small>
            </p>
          </li>
        )}
        {location && (
          <li>
            <p className="mb-0 lh-1" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                {location.name.replace("-", " ")}
              </small>
            </p>
          </li>
        )}
        {min_affection && (
          <li>
            <p className="mb-0 lh-1" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                {min_affection} affection
              </small>
            </p>
          </li>
        )}
        {min_beauty && (
          <li>
            <p className="mb-0 lh-1" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                {min_beauty} beauty
              </small>
            </p>
          </li>
        )}
        {min_happiness && (
          <li>
            <p className="mb-0 lh-1" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                {min_happiness} happiness
              </small>
            </p>
          </li>
        )}
        {min_level && (
          <li>
            <p className="mb-0" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold">LVL {min_level}</small>
            </p>
          </li>
        )}
        {needs_overworld_rain === true && (
          <li>
            <p className="mb-0 lh-1" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">while raining</small>
            </p>
          </li>
        )}
        {party_species && (
          <li>
            <p className="mb-0 lh-1" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                {party_species.name} in party
              </small>
            </p>
          </li>
        )}
        {party_type && (
          <li>
            <p className="mb-0 lh-1" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                {party_type.name}-type in party
              </small>
            </p>
          </li>
        )}
        {relative_physical_stats !== null && (
          <li>
            <p className="mb-0 lh-1" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                {relative_physical_stats === 1 && "ATK > DEF"}
                {relative_physical_stats === -1 && "DEF > ATK"}
                {relative_physical_stats === 0 && "ATK = DEF"}
              </small>
            </p>
          </li>
        )}
        {time_of_day && (
          <li>
            <p className="mb-0" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                {time_of_day} time
              </small>
            </p>
          </li>
        )}
        {trigger.name === "trade" && (
          <li>
            <p className="mb-0" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">
                {trade_species ? `trade with ${trade_species.name}` : "trade"}
              </small>
            </p>
          </li>
        )}
        {turn_upside_down === true && (
          <li>
            <p className="mb-0" style={{ fontSize: "0.8em" }}>
              <small className="fw-bold text-uppercase">turn upside down</small>
            </p>
          </li>
        )}
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
