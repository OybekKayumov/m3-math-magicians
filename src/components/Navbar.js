import { NavLink } from 'react-router-dom';
import './pages.css';

function Navbar() {
  return (
    <nav>
      <div>
        <NavLink
          className="nav-logo"
          to="/math-magicians"
        >
          Math Magicians
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/math-magicians"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/Calculator"
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/Quote"
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
