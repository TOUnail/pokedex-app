import React from "react";
import Store from "./context/Store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import "./App.scss";

const App = () => {
  return (
    <Store>
      <Router>
        <Switch>
          <Route
            path="/pokemon/:name"
            component={(props) => <Pokemon {...props} />}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Store>
  );
};
export default App;
