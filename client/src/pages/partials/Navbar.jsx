import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import ROUTES from "../../../routes";

export default function Navbar() {
  return (
    <nav className="Nav">
      <div className="Nav__container">
        <NavLink
          to={ROUTES.TODOS}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Todos
        </NavLink>
        <NavLink
          to={ROUTES.LOGIN}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}
