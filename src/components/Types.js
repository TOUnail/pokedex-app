import React from "react";
import "./Type.scss";
// const importAllTypeIcons = (r) => {
//   let images = {};
//   r.keys().forEach((item, index) => {
//     images[item.replace("../assets/types", "")] = r(item);
//   });
//   return images;
// };

// const images = importAllTypeIcons(
//   require.context("../assets/types", false, /\.(svg)$/)
// );

const Types = (props) => {
  return (
    <div
      className={`rounded-circle p-3 ${props.type} type-icon d-flex align-items-center justify-content-center`}
    />
  );
};

export default Types;
