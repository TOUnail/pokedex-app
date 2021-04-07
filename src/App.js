import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div>
      <header className="header">
        <div className="container py-3">
          <div className="row">
            <div className="col text-center">
              <p className="mb-0 text-glass-dark font-weight-bold">Pokemon</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input className="form-control rounded-pill" type="text" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default App;
