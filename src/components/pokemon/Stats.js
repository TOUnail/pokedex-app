import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Stats = ({ data }) => {
  const formatStatName = (s) => {
    //let name = ""
    switch (s) {
      case "hp":
        return "HP";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "special-attack":
        return "Sp Atk";
      case "special-defense":
        return "Sp Def";
      case "speed":
        return "Speed";
      default:
        return null;
    }
    // return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const chartData = data.map((stat) => ({
    stat: formatStatName(stat.stat.name),
    value: stat.base_stat,
  }));

  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid stroke="#aaa" />
        <PolarAngleAxis dataKey="stat" strokeOpacity={0.01} stroke="#666" />

        <PolarRadiusAxis stroke="#aaa" angle={30} />
        <Radar
          name="baseStat"
          dataKey="value"
          fill="#8884d8"
          fillOpacity={0.6}
          isAnimationActive={false}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Stats;
