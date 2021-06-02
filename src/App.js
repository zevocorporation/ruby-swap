import React from "react";
import "./index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./patterns/header";
import Footer from "./patterns/footer";
import { HomeScreen } from "./screens";


import Warning from "./patterns/modal/warning";
import WrongNetwork from "./patterns/modal/wrongNetwork";
import Settings from "./patterns/modal/settings";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
      </Switch>
      <Warning/>
      <WrongNetwork/>
      <Settings/>
      <Footer />
    </Router>
  );
};

export default App;
