import React from "react";
import { formatLocation } from "../../util/formatLocation";
import { useRequest } from "../../hooks/useRequest";

const Location = (props) => {
  const diamond = [];
  const pearl = [];
  const platinum = [];
  const gold = [];
  const silver = [];
  const crystal = [];
  const soulSilver = [];
  const heartGold = [];
  const red = [];
  const blue = [];
  const yellow = [];
  const green = [];
  const fireRed = [];
  const leafGreen = [];
  const x = [];
  const y = [];
  const ruby = [];
  const sapphire = [];
  const emerald = [];
  const black = [];
  const white = [];
  const black2 = [];
  const white2 = [];
  const { data, error } = useRequest("/pokemon/" + props.data, "encounters");
  if (error) return "Error";
  if (!data) {
    return "Loading";
  } else {
    data.map((loc) =>
      loc.version_details.forEach((ver) => {
        if (ver.version.name === "diamond")
          diamond.push(loc.location_area.name);
        if (ver.version.name === "pearl") pearl.push(loc.location_area.name);
        if (ver.version.name === "platinum")
          platinum.push(loc.location_area.name);
        if (ver.version.name === "gold") gold.push(loc.location_area.name);
        if (ver.version.name === "silver") silver.push(loc.location_area.name);
        if (ver.version.name === "crystal")
          crystal.push(loc.location_area.name);
        if (ver.version.name === "soulsilver")
          soulSilver.push(loc.location_area.name);
        if (ver.version.name === "heartgold")
          heartGold.push(loc.location_area.name);
        if (ver.version.name === "red") red.push(loc.location_area.name);
        if (ver.version.name === "blue") blue.push(loc.location_area.name);
        if (ver.version.name === "yellow") yellow.push(loc.location_area.name);
        if (ver.version.name === "green") green.push(loc.location_area.name);
        if (ver.version.name === "firered")
          fireRed.push(loc.location_area.name);
        if (ver.version.name === "leafgreen")
          leafGreen.push(loc.location_area.name);
        if (ver.version.name === "x") x.push(loc.location_area.name);
        if (ver.version.name === "y") y.push(loc.location_area.name);
        if (ver.version.name === "ruby") ruby.push(loc.location_area.name);
        if (ver.version.name === "sapphire")
          sapphire.push(loc.location_area.name);
        if (ver.version.name === "emerald")
          emerald.push(loc.location_area.name);
        if (ver.version.name === "black-2") black2.push(loc.location_area.name);
        if (ver.version.name === "white-2") white2.push(loc.location_area.name);
        if (ver.version.name === "black") black.push(loc.location_area.name);
        if (ver.version.name === "white") white.push(loc.location_area.name);
      })
    );
  }
  const allData = [
    { name: "Red", areas: red.length > 0 ? red : [] },
    { name: "Blue", areas: blue.length > 0 ? blue : [] },
    { name: "Yellow", areas: yellow.length > 0 ? yellow : [] },
    { name: "Green", areas: green.length > 0 ? green : [] },
    { name: "Gold", areas: gold.length > 0 ? gold : [] },
    { name: "Silver", areas: silver.length > 0 ? silver : [] },
    { name: "Crystal", areas: crystal.length > 0 ? crystal : [] },
    { name: "Ruby", areas: ruby.length > 0 ? ruby : [] },
    { name: "Sapphire", areas: sapphire.length > 0 ? sapphire : [] },
    { name: "Emerald", areas: emerald.length > 0 ? emerald : [] },
    { name: "Diamond", areas: diamond.length > 0 ? diamond : [] },
    { name: "Pearl", areas: pearl.length > 0 ? pearl : [] },
    { name: "Platinum", areas: platinum.length > 0 ? platinum : [] },
    { name: "Black", areas: black.length > 0 ? black : [] },
    { name: "White", areas: white.length > 0 ? white : [] },
    { name: "Black 2", areas: black2.length > 0 ? black2 : [] },
    { name: "White 2", areas: white2.length > 0 ? white2 : [] },
    { name: "X", areas: x.length > 0 ? x : [] },
    { name: "Y", areas: y.length > 0 ? y : [] },
    { name: "Soul silver", areas: soulSilver.length > 0 ? soulSilver : [] },
    { name: "Heart gold", areas: heartGold.length > 0 ? heartGold : [] },
    { name: "Fire red", areas: fireRed.length > 0 ? fireRed : [] },
    { name: "Leaf green", areas: leafGreen.length > 0 ? leafGreen : [] },
  ];
  return (
    <table className="table table-borderless">
      <tbody>
        {allData.map((location) => (
          <tr key={`${location.name}-${location.areas}`}>
            <td>{location.name}</td>
            <td
              dangerouslySetInnerHTML={{
                __html: formatLocation(location.areas),
              }}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Location;
