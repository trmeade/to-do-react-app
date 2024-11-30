import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";

export function Navbar() {

  return (
    <>
      <nav className="nav">
        <ul>
          <CustomLink to="/">Todos</CustomLink>
          <CustomLink to="/AboutForm">About</CustomLink>
          <CustomLink to="/ContactForm">Contact</CustomLink>
        </ul>
      </nav>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

CustomLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string
}