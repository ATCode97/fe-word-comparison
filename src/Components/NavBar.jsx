import React from "react";
import "./navbar.css";
import Toggle from "./Toggle";

const NavBar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toggle-toolbar-button">
          <Toggle click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo">
          <a href="/">Word Comparison</a>
        </div>
        <div className="spacer" />
        <div className="toolbar-nav-items">
          <ul>
            <li>
              <a href="/history">history</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
