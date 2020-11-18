import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Topic from "./topic";

const Topics = () => {
  let match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

export default Topics;
