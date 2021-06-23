import React, { useState } from "react";
import Context from "../../context/Context";

const Footer = (props) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Context.Consumer>
      {(context) => (
        <footer className="footer fixed-bottom">
          <div className="container">
            <div className="row justify-content-around align-items-center">
              {/* <div className="col text-center">
                <svg version="1.1" height="24" width="24">
                  <path
                    fill="#231F20"
                    d="M19.5,11.8l3.3-3l-4.2-2.6C17.8,6.6,16,8.7,16,8.7c-0.2,0-0.3,0-0.3,0c0.2-0.3-0.4-1.3-0.4-1.3
            C20,3,19.3,0.5,19.3,0.5c-3.3,0.6-5.8,5.4-5.8,5.4c-2.5-1-5.2,0.3-5.2,0.3c-5.2-2.1-7-0.6-7-0.6c1.3,2,5,2.2,5,2.2
            C7,7.7,6.8,8.5,6.8,8.5L6.4,9.6c-1.4,2.4,1,3.9,1,3.9c0.5,0.3,0.3,0.7,0.3,0.7c-0.5,2-0.8,4.1-0.8,4.1c-0.7,1.7,0.6,3,0.6,3
            l-0.5,0.7c-1,1.2,0.1,1.1,0.1,1.1c0.7,0.3,2.8-1.5,2.8-1.5c1.8-0.7,3.8,0.2,3.8,0.2l1.7,1.7c0.8,0.7,1.2,0,1.2,0
            c0.2-0.6-0.3-2.3-0.3-2.3c0.8-0.8,0.8-1.8,0.8-1.8l4.2-3l-1.7-1.2l2.5-1.9L19.5,11.8z M16.1,14.9c0,0-1-1.7-0.1-1.9l1.6,0.8
            l-0.8,1.1C16.7,14.9,16.4,15.7,16.1,14.9z M17.3,17.7c0,0-0.3,0.3-0.4-0.2c0,0-1-2.2,0.2-1.7l1.2,0.8L17.3,17.7z"
                  />
                </svg>

                <p className="mb-0">pokemon</p>
              </div>
              <div className="col text-center">
                <svg height="24" width="24" version="1.1">
                  <g transform="translate(0 -1028.4)">
                    <path
                      d="m12 1029.4c-6.0751 0-11 4.9-11 11 0 6 4.9249 11 11 11 6.075 0 11-5 11-11 0-6.1-4.925-11-11-11zm0 4c3.866 0 7 3.1 7 7 0 3.8-3.134 7-7 7s-7-3.2-7-7c0-3.9 3.134-7 7-7z"
                      fill="#bdc3c7"
                    />
                    <path
                      d="m17 1031.7c-4.783-2.8-10.899-1.1-13.66 3.7-2.7617 4.7-1.1229 10.9 3.66 13.6 4.783 2.8 10.899 1.1 13.66-3.6 2.762-4.8 1.123-10.9-3.66-13.7zm-4 6.9c0.957 0.6 1.284 1.8 0.732 2.8-0.552 0.9-1.775 1.2-2.732 0.7-0.957-0.6-1.2843-1.8-0.732-2.7 0.552-1 1.775-1.3 2.732-0.8z"
                      fill="#bdc3c7"
                    />
                    <path
                      d="m13.5 1037.8c-1.435-0.9-3.27-0.4-4.0981 1.1-0.8284 1.4-0.3368 3.2 1.0981 4.1 1.435 0.8 3.27 0.3 4.098-1.1 0.829-1.5 0.337-3.3-1.098-4.1zm-0.5 0.8c0.957 0.6 1.284 1.8 0.732 2.8-0.552 0.9-1.775 1.2-2.732 0.7-0.957-0.6-1.2843-1.8-0.732-2.7 0.552-1 1.775-1.3 2.732-0.8z"
                      fill="#ecf0f1"
                    />
                    <path
                      d="m6.0098 1032.3c-2.2488 1.7-3.6216 4.2-3.9375 6.8l7.9647 1c0.065-0.6 0.33-1 0.782-1.4l-4.8092-6.4zm15.913 9.2-7.938-1c-0.065 0.6-0.357 1-0.808 1.4l4.809 6.4c2.248-1.7 3.621-4.2 3.937-6.8z"
                      fill="#ecf0f1"
                    />
                    <path
                      d="m12 1036.4c-2.2091 0-4 1.8-4 4s1.7909 4 4 4c2.209 0 4-1.8 4-4s-1.791-4-4-4zm0 1c1.657 0 3 1.3 3 3 0 1.6-1.343 3-3 3s-3-1.4-3-3c0-1.7 1.343-3 3-3z"
                      fill="#bdc3c7"
                    />
                  </g>
                </svg>
                <p className="mb-0">moves</p>
              </div> */}
              <div className="col text-center position-relative">
                <svg
                  onClick={() => handleClick()}
                  height="24"
                  width="24"
                  version="1.1"
                >
                  <g transform="translate(0 -1028.4)">
                    <path
                      d="m12 1029.4c-6.0751 0-11 4.9-11 11 0 6 4.9249 11 11 11 6.075 0 11-5 11-11 0-6.1-4.925-11-11-11zm0 4c3.866 0 7 3.1 7 7 0 3.8-3.134 7-7 7s-7-3.2-7-7c0-3.9 3.134-7 7-7z"
                      fill="#bdc3c7"
                    />
                    <path
                      d="m17 1031.7c-4.783-2.8-10.899-1.1-13.66 3.7-2.7617 4.7-1.1229 10.9 3.66 13.6 4.783 2.8 10.899 1.1 13.66-3.6 2.762-4.8 1.123-10.9-3.66-13.7zm-4 6.9c0.957 0.6 1.284 1.8 0.732 2.8-0.552 0.9-1.775 1.2-2.732 0.7-0.957-0.6-1.2843-1.8-0.732-2.7 0.552-1 1.775-1.3 2.732-0.8z"
                      fill="#bdc3c7"
                    />
                    <path
                      d="m13.5 1037.8c-1.435-0.9-3.27-0.4-4.0981 1.1-0.8284 1.4-0.3368 3.2 1.0981 4.1 1.435 0.8 3.27 0.3 4.098-1.1 0.829-1.5 0.337-3.3-1.098-4.1zm-0.5 0.8c0.957 0.6 1.284 1.8 0.732 2.8-0.552 0.9-1.775 1.2-2.732 0.7-0.957-0.6-1.2843-1.8-0.732-2.7 0.552-1 1.775-1.3 2.732-0.8z"
                      fill="#ecf0f1"
                    />
                    <path
                      d="m6.0098 1032.3c-2.2488 1.7-3.6216 4.2-3.9375 6.8l7.9647 1c0.065-0.6 0.33-1 0.782-1.4l-4.8092-6.4zm15.913 9.2-7.938-1c-0.065 0.6-0.357 1-0.808 1.4l4.809 6.4c2.248-1.7 3.621-4.2 3.937-6.8z"
                      fill="#ecf0f1"
                    />
                    <path
                      d="m12 1036.4c-2.2091 0-4 1.8-4 4s1.7909 4 4 4c2.209 0 4-1.8 4-4s-1.791-4-4-4zm0 1c1.657 0 3 1.3 3 3 0 1.6-1.343 3-3 3s-3-1.4-3-3c0-1.7 1.343-3 3-3z"
                      fill="#bdc3c7"
                    />
                  </g>
                </svg>
                <p onClick={() => handleClick()} className="mb-0">
                  generation
                </p>
                {active && (
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
                      <button
                        className="rounded-circle btn btn-sm btn-primary border-0 px-0"
                        style={{ width: 30, height: 30 }}
                        onClick={(event) => {
                          event.preventDefault();
                          context.setGen(1);
                          setActive(false);
                        }}
                      >
                        1
                      </button>
                    </li>
                    <li>
                      <button
                        className="rounded-circle btn btn-sm btn-primary border-0 px-0"
                        style={{ width: 30, height: 30 }}
                        onClick={(event) => {
                          event.preventDefault();
                          context.setGen(2);
                          setActive(false);
                        }}
                      >
                        2
                      </button>
                    </li>
                    <li>
                      <button
                        className="rounded-circle btn btn-sm btn-primary border-0 px-0"
                        style={{ width: 30, height: 30 }}
                        onClick={(event) => {
                          event.preventDefault();
                          context.setGen(3);
                          setActive(false);
                        }}
                      >
                        3
                      </button>
                    </li>
                    <li>
                      <button
                        className="rounded-circle btn btn-sm btn-primary border-0 px-0"
                        style={{ width: 30, height: 30 }}
                        onClick={(event) => {
                          event.preventDefault();
                          context.setGen(4);
                          setActive(false);
                        }}
                      >
                        4
                      </button>
                    </li>
                    <li>
                      <button
                        className="rounded-circle btn btn-sm btn-primary border-0 px-0"
                        style={{ width: 30, height: 30 }}
                        onClick={(event) => {
                          event.preventDefault();
                          context.setGen(5);
                          setActive(false);
                        }}
                      >
                        5
                      </button>
                    </li>
                    <li>
                      <button
                        className="rounded-circle btn btn-sm btn-primary border-0 px-0"
                        style={{ width: 30, height: 30 }}
                        onClick={(event) => {
                          event.preventDefault();
                          context.setGen(6);
                          setActive(false);
                        }}
                      >
                        6
                      </button>
                    </li>
                    <li>
                      <button
                        className="rounded-circle btn btn-sm btn-primary border-0 px-0"
                        style={{ width: 30, height: 30 }}
                        onClick={(event) => {
                          event.preventDefault();
                          context.setGen(7);
                          setActive(false);
                        }}
                      >
                        7
                      </button>
                    </li>
                    <li>
                      <button
                        className="rounded-circle btn btn-sm btn-primary border-0 px-0"
                        style={{ width: 30, height: 30 }}
                        onClick={(event) => {
                          event.preventDefault();
                          context.setGen(8);
                          setActive(false);
                        }}
                      >
                        8
                      </button>
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
      )}
    </Context.Consumer>
  );
};

export default Footer;
