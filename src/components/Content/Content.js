import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

//componetnts
import About from "./about";
import Form from "./Form/Form";
import Home from "./home";
import Topics from "./topic/topics";

const Content = () => {
  const [auth, setAuth] = useState(true);

  return (
    <div className="conternt">
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/forma">
          {auth ? <Form /> : <Redirect to="/about" />}
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
