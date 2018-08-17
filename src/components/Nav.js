import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <nav>
      <div className="container">
        <NavLink to="/" className="nav-logo">
          <img
            className=""
            src="logos/potentiaali-black.png"
            alt="Kumpulan Potentiaali"
          />
        </NavLink>
        <a href="#menu" className="mobile-menu" onClick={props.handleClick}>
          <span
            className={
              !props.menuOpen
                ? "fa fa-bars mobile-menu-icon"
                : "fa fa-close mobile-menu-icon"
            }
          />
        </a>
        {props.menuOpen && (
          <div className="mobile-nav-links">
            {props.menu &&
              props.menu.map(
                menuItem =>
                  !menuItem.disabled && (
                    <NavLink
                      to={menuItem.link}
                      key={menuItem.name}
                      activeClassName="active-link"
                    >
                      {menuItem.name}
                    </NavLink>
                  )
              )}
          </div>
        )}
        <div className="nav-links">
          {props.menu &&
            props.menu.map(
              menuItem =>
                !menuItem.disabled && (
                  <NavLink
                    to={menuItem.link}
                    key={menuItem.name}
                    activeClassName="active-link"
                  >
                    {menuItem.name}
                  </NavLink>
                )
            )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
