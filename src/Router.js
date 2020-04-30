import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import ImageView from "./ImageView/ImageView";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/image/:id" component={ImageView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Router;
