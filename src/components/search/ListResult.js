import React from "react";
import ListResultCard from "./ListResultCard";
import { Link } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";

const ListResult = (props) => {
  // console.log(props);
  const { data } = useRequest("/pokemon-species", props.data);

  if (!data) {
    return (
      <li>
        <div className="card rounded-0 border-0">
          <div className="card-body p-0">
            <div className="d-flex align-items-center">
              <div
                className="m-0 d-flex justify-content-center align-items-center"
                style={{ width: "96px", height: "96px" }}
              >
                <div
                  className="spinner-border text-secondary p-2"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <p className="m-0">Loading</p>
            </div>
          </div>
        </div>
      </li>
    );
  } else {
    let defaultVariety = data.varieties.find((variety) => variety.is_default);
    return (
      <li>
        <Link className="text-decoration-none" to={`/pokemon/${props.data}`}>
          <div className="card rounded-0 border-0">
            <div className="card-body p-0">
              <ListResultCard pokemon={defaultVariety.pokemon} />
            </div>
          </div>
        </Link>
      </li>
    );
  }
};

export default ListResult;
