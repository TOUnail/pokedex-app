import React, { useState } from "react";
import ListResult from "../search/ListResult";
import data from "../../assets/pokemon.json";

const Header = () => {
  // let textInput = createRef;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const handleChange = (query) => {
    // event.preventDefault();
    setSearchQuery(query);
    if (searchQuery.length > 1) {
      // let formatData = searchQuery[0].toUpperCase() + searchQuery.substring(1);
      setSearchResult(data.filter((r) => r.includes(searchQuery)));
    }
  };
  return (
    <div className="fixed-top">
      <header className="header">
        <div className="container py-3">
          <div className="row">
            <div className="col text-center">
              <p className="mb-0 text-glass-dark font-weight-bold">Pokemon</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                className="form-control rounded-pill input-search"
                // style={{ backgroundColor: "rgba(204,204,204,0.9)" }}
                type="text"
                placeholder="Search"
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>
      {searchQuery.length > 2 && (
        <div className="container mt-n3">
          <div className="row">
            <div className="col">
              <ul
                className="list-unstyled"
                style={{ overflowY: "scroll", maxHeight: "70vh", zIndex: 1021 }}
              >
                {searchResult.length > 0 ? (
                  searchResult.map((result) => (
                    <ListResult key={result} data={result} />
                  ))
                ) : (
                  <li>
                    <div className="card rounded-0 border-0">
                      <div className="card-body">
                        <p className="m-0">Pokemon Not Found</p>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
