import React from "react";
import "./index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./patterns/header";
import Footer from "./patterns/footer";
import {
  FarmsScreen,
  HomeScreen,
  PoolsScreen,
  PredictionScreen,
  TradeScreen,
} from "./screens";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/trade" exact>
          <TradeScreen />
        </Route>
        <Route path="/farms" exact>
          <FarmsScreen />
        </Route>
        <Route path="/pools" exact>
          <PoolsScreen />
        </Route>
        <Route path="/prediction" exact>
          <PredictionScreen />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
