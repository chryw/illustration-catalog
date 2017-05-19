import * as React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <div className="header ms-Grid-row ms-bgColor-themePrimary ms-fontColor-white">
    <div className="header-title">
      <span>Illustrations</span>
      <span>for Visual Studio family</span>
    </div>
    <div className="header-nav">
      <NavLink to="/library" title="Library" activeClassName="active">Library</NavLink>
      <NavLink to="/guidelines" title="Guidelines" activeClassName="active">Guidelines</NavLink>
    </div>
  </div>
);

export default Header;
