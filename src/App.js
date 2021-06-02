import React from "react";
import "./index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./patterns/header";
import Footer from "./patterns/footer";
import { HomeScreen } from "./screens";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
