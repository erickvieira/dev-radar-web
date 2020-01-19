import React from "react";

const Header = ({ color, children }) => (
  <header style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
    <h1 style={{ color }}>{children}</h1>
  </header>
);

export default Header;
