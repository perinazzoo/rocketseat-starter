import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Member from "./pages/member";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/members/:id" component={Member} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
