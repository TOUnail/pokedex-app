import React, { useState, useContext } from "react";
import GenButton from "./GenButton";
import Context from "../../context/Context";

const Footer = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const genContext = useContext(Context);
  const GenIdentifier = ({ firstColor, secondColor }) => (
    <div
      className="rounded-circle btn btn-sm btn-primary border-0 px-0 font-weight-bold"
      style={{
        width: 30,
        height: 30,
        background: `linear-gradient(0deg, ${firstColor}, ${firstColor} 48%, white 48%, white 52%, ${secondColor} 52%)`,
        color: "#333",
        fontWeight: "bold",
      }}
      onClick={() => handleClick()}
    >
      {genContext.generation}
    </div>
  );
  let genButton;
  switch (genContext.generation) {
    case 1:
      genButton = (
        <GenIdentifier
          firstColor="rgba(66, 165, 245, .5)"
          secondColor="rgba(239, 83, 80, .5)"
        />
      );
      break;
    case 2:
      genButton = (
        <GenIdentifier
          firstColor="rgba(255, 215, 0,.5)"
          secondColor="rgba(192, 192, 192,.5)"
        />
      );
      break;
    case 3:
      genButton = (
        <GenIdentifier
          firstColor="rgba(18, 97, 128, .5)"
          secondColor="rgba(155, 17, 30,.5)"
        />
      );
      break;
    case 4:
      genButton = (
        <GenIdentifier
          firstColor="rgba(166, 111, 111,.5)"
          secondColor="rgba(111, 111, 166,.5)"
        />
      );
      break;
    case 5:
      genButton = (
        <GenIdentifier
          firstColor="rgba(51, 51, 51,.5)"
          secondColor="rgba(239, 239, 239, .5)"
        />
      );
      break;
    case 6:
      genButton = (
        <GenIdentifier
          firstColor="rgba(2, 93, 166, .5)"
          secondColor="rgba(234, 26, 62, .5)"
        />
      );
      break;
    case 7:
      genButton = (
        <GenIdentifier
          firstColor="rgba(241, 145, 43, .5)"
          secondColor="rgba(85, 153, 202, .5)"
        />
      );
      break;
    case 8:
      genButton = (
        <GenIdentifier
          firstColor="rgba(0, 161, 233, .5)"
          secondColor="rgba(191, 0, 79, .5)"
        />
      );
      break;
    default:
      break;
  }
  return (
    <footer className="footer fixed-bottom py-1">
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <div className="col text-center position-relative">
            {genButton}

            <p
              role="button"
              onClick={() => handleClick()}
              className="mb-0"
              style={{ fontSize: "0.8em" }}
            >
              <small className="fw-bold text-uppercase">generation</small>
            </p>
            {active && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ul
                  className="list-unstyled position-absolute gen-navigation"
                  style={{
                    bottom: "50px",
                    display: "grid",
                    gridGap: "10px",
                    gridAutoFlow: "row",
                    gridTemplateColumns: "repeat(3,1fr)",
                  }}
                >
                  <li>
                    <GenButton
                      gen={1}
                      firstColor="rgba(66, 165, 245, .5)"
                      secondColor="rgba(239, 83, 80, .5)"
                      setActive={setActive}
                    />
                  </li>
                  <li>
                    <GenButton
                      gen={2}
                      firstColor="rgba(255, 215, 0,.5)"
                      secondColor="rgba(192, 192, 192,.5)"
                      setActive={setActive}
                    />
                  </li>
                  <li>
                    <GenButton
                      gen={3}
                      firstColor="rgba(18, 97, 128, .5)"
                      secondColor="rgba(155, 17, 30,.5)"
                      setActive={setActive}
                    />
                  </li>
                  <li>
                    <GenButton
                      gen={4}
                      firstColor="rgba(166, 111, 111,.5)"
                      secondColor="rgba(111, 111, 166,.5)"
                      setActive={setActive}
                    />
                  </li>
                  <li>
                    <GenButton
                      gen={5}
                      firstColor="rgba(51, 51, 51,.5)"
                      secondColor="rgba(239, 239, 239, .5)"
                      setActive={setActive}
                    />
                  </li>
                  <li>
                    <GenButton
                      gen={6}
                      firstColor="rgba(2, 93, 166, .5)"
                      secondColor="rgba(234, 26, 62, .5)"
                      setActive={setActive}
                    />
                  </li>
                  <li>
                    <GenButton
                      gen={7}
                      firstColor="rgba(241, 145, 43, .5)"
                      secondColor="rgba(85, 153, 202, .5)"
                      setActive={setActive}
                    />
                  </li>
                  <li>
                    <GenButton
                      gen={8}
                      firstColor="rgba(0, 161, 233, .5)"
                      secondColor="rgba(191, 0, 79, .5)"
                      setActive={setActive}
                    />
                  </li>
                  {/* <li>
                      <button
                        className="rounded-circle btn btn-sm btn-primary border-0 px-0"
                        style={{ width: 30, height: 30 }}
                        onClick={(event) => {
                          event.preventDefault();
                          context.setGen(0);
                          setActive(false);
                        }}
                      >
                        all
                      </button>
                    </li> */}
                </ul>
              </div>
            )}
          </div>
          {/* <div className="col text-center">
            <svg height="24" width="24" version="1.1">
              <g transform="translate(0 -1028.4)">
                <rect height="14" width="14" y="1030.4" x="5" fill="#e67e22" />
                <path
                  d="m4 5v16h16v-16h-16z"
                  transform="translate(0 1028.4)"
                  fill="#f1c40f"
                />
                <path d="m6 1031.4-2 2h2v-2z" fill="#f39c12" />
                <path d="m5 1030.4v2l1-1z" fill="#f1c40f" />
                <path d="m18 1031.4 2 2h-2v-2z" fill="#f39c12" />
                <path d="m19 1030.4v2l-1-1z" fill="#f1c40f" />
                <path
                  d="m12 1045.4c2.761 0 5-2.3 5-5v-3h-1v3c0 2.2-1.791 4-4 4-2.2091 0-4-1.8-4-4v-3h-1v3c0 2.7 2.2386 5 5 5z"
                  fill="#f39c12"
                />
                <path
                  d="m12 1044.4c-2.7614 0-5-2.3-5-5v-3h1v3c0 2.2 1.7909 4 4 4 2.209 0 4-1.8 4-4v-3h1v3c0 2.7-2.239 5-5 5z"
                  fill="#ecf0f1"
                />
                <path
                  d="m17 1035.4v1h-1v-1h1zm-9 0v1h-1v-1h1z"
                  fill="#f39c12"
                />
                <path d="m4 1049.4 1 1h2 10 2l1-1h-16z" fill="#f39c12" />
              </g>
            </svg>
            <p className="mb-0">items</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
