import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import Layout from "./layout";


function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
         <Route exact path="/badges" component={Badges} />
         <Route exact  path="/badges/new" component={BadgeNew} />
         <Route  exact path="/" component={HomePage} />
         <Route  component={NotFound} />
      </Switch>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
