import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/pokemon/:name" component={Pokemon} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
