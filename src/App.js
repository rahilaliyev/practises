import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from "./views/HomePage";
import BasicsPage from "./views/BasicsPage";
import DashboardPage from "./views/DashboardPage";
import FramerPage from "./views/FramerPage";
import BorderImage from "./views/BorderImage";
import Hammer from "./views/Hammer/Hammer";


const App = () => {
  const location = useLocation();
  return (
   
    <Switch location={location} key={location.pathname}>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/basics">
        <BasicsPage />
      </Route>
      <Route path="/dashboard">
        <DashboardPage />
      </Route>
      <Route path="/framer">
        <FramerPage />
      </Route>
      <Route path="/borderImage">
        <BorderImage />
      </Route>
      <Route path="/hammer">
        <Hammer />
      </Route>
    </Switch>
    // </AnimatePresence>
  );
};

export default App;
