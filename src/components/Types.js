import React from "react";
import "./Type.scss";
const importAllTypeIcons = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("../assets/types", "")] = r(item);
  });
  return images;
};

const images = importAllTypeIcons(
  require.context("../assets/types", false, /\.(svg)$/)
);

const Types = ({ type, keyName }) => {
  return (
    <ul className="list-inline mb-0">
      {type.map((r) => (
        <li className="list-inline-item" key={keyName + r.type.name}>
          {/* {images[`${r.type.name}.svg`]}
          {r.type.name} */}
          <div
            className={`rounded-circle p-2 ${r.type.name} type-icon d-flex align-items-center justify-content-center`}
          >
            <object
              data={images[`./${r.type.name}.svg`].default}
              aria-label={r.type.name}
              width={15}
              height={15}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Types;
