import React from "react";
import routes from "./routes";
import {Link} from "react-router-dom";

const Header = () => (
  <ul className="Nav">
    {routes.map((route, i) => (
      <li key={i}>
        <Link to={route.path}>{route.name}</Link>
      </li>
    ))}
  </ul>
);

export default Header;