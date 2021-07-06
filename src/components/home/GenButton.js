import React from "react";
import Context from "../../context/Context";

const GenButton = ({ gen, setActive, firstColor, secondColor }) => {
  return (
    <Context.Consumer>
      {(context) => (
        <button
          className="rounded-circle btn btn-sm btn-primary border-0 px-0 fw-bold"
          style={{
            width: 30,
            height: 30,
            background: `linear-gradient(0deg, ${firstColor}, ${firstColor} 48%, white 48%, white 52%, ${secondColor} 52%)`,
            color: "#333",
          }}
          onClick={(event) => {
            setActive(false);
            event.preventDefault();
            context.setGen(gen);
          }}
        >
          {gen}
        </button>
      )}
    </Context.Consumer>
  );
};

export default GenButton;
