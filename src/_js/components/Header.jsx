import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/index';

const Header = () => (
  <div className="header ms-Grid-row ms-bgColor-themePrimary ms-fontColor-white">
    <div className="header-title">
      <span>Illustrations</span>
      <span>for Visual Studio family</span>
    </div>
    <div className="header-nav">
      <Link href="#aOverview" title="Overview">Overview</Link>
      <Link href="#aGallery" title="Gallery">Gallery</Link>
      <Link href="#aFooter" title="Helpful Links">Helpful Links</Link>
    </div>
  </div>
);

export default Header;
