import React from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  NavLink,
  Redirect,
} from "react-router-dom";
import "./form.css";

const Form = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h1>Form</h1>
      <ul>
        <li>
          <NavLink
            to={`${match.url}/form-1`}
            className="link"
            activeClassName="active"
          >
            Form 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${match.url}/form-2`}
            className="link"
            activeClassName="active"
          >
            Form 2
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Redirect exact from={`${match.path}`} to={`${match.path}/form-1`} />
        <Route path={`${match.path}/:id`}>
          <InerTestForm />
        </Route>
      </Switch>
    </div>
  );
};

function InerTestForm() {
  const { id } = useParams();

  return (
    <div>
      <h3>Tthis form ID is {id}</h3>
    </div>
  );
}

export default Form;
