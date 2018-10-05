import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../data/menu.json";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  /**
   * Handle menu open & close
   *
   * @param {*} event
   * @memberof App
   */
  handleClick = event => {
    event.preventDefault();
    this.setState(oldState => {
      return {
        menuOpen: !oldState.menuOpen
      };
    });
  };

  render() {
    return (
      <nav>
        <div className="container">
          <NavLink to="/" className="nav-logo">
            <img
              className=""
              src="/logos/potentiaali-black.png"
              alt="Kumpulan Potentiaali"
            />
          </NavLink>
          <a href="#menu" className="mobile-menu" onClick={this.handleClick}>
            <span
              className={
                !this.state.menuOpen
                  ? "fa fa-bars mobile-menu-icon"
                  : "fa fa-close mobile-menu-icon"
              }
            />
          </a>
          {this.state.menuOpen && (
            <div className="mobile-nav-links">
              {menu &&
                menu.map(
                  menuItem =>
                    !menuItem.disabled && (
                      <NavLink
                        exact
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
            {menu &&
              menu.map(
                menuItem =>
                  !menuItem.disabled && (
                    <NavLink
                      exact
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
  }
}

export default Nav;
