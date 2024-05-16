import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
import mimi33logo from "../assets/mimilogo.png";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <NavLink to="/" className="nav-link">
          <img className="h-16 w-16 my-0 object-cover" src={mimi33logo} />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/photo" className="nav-link">
            Photo
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Contact
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
