import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>

      <h2 style={{color: 'white'}}>Static Pages</h2>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "lightyellow", textDecoration: "none" } : {}
        }
        to="home"
        end
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="add"
      >
        Add
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="about"
      >
        About
      </NavLink>
 
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="contacts"
      >
        Contacts
      </NavLink>

    </nav>
  );
};

export default Menu;
