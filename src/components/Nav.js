import React from "react";

export default props => {
  return (
    <nav>
      <div className="container">
        <a href="index.html" className="nav-logo">
          <img
            className=""
            src="logos/potentiaali-black.png"
            alt="Kumpulan Potentiaali"
          />
        </a>
        <div className="nav-links">
          {props.menu &&
            props.menu.map(menuItem => !menuItem.disabled && (
              <a href={menuItem.link} key={menuItem.name}>
                {menuItem.name}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
};
