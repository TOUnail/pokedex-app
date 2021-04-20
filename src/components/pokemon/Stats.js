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
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const chartData = data.map((stat) => ({
    stat: formatStatName(stat.stat.name),
    value: stat.base_stat,
  }));

  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid stroke="#666" />
        <PolarAngleAxis
          dataKey="stat"
          stroke="#666"
          scaleToFit={true}
          width={15}
        />

        <PolarRadiusAxis stroke="#666" angle={30} />
        <Radar
          name="baseStat"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
          isAnimationActive={false}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Stats;
