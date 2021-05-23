import React, { useState } from "react";

const Header = (props) => {
  // let textInput = createRef;
  const [searchQuery, setSearchQuery] = useState("");
  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.searchTerm(searchQuery);
  };
  return (
    <header className="header fixed-top">
      <div className="container py-3">
        <div className="row">
          <div className="col text-center">
            <p className="mb-0 text-glass-dark font-weight-bold">Pokemon</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={onSearchSubmit}>
              <input
                className="form-control rounded-pill input-search"
                // style={{ backgroundColor: "rgba(204,204,204,0.9)" }}
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
