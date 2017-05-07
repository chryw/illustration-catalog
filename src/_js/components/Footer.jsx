import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/index';

const Footer = () => (
  <div className="footer ms-Grid-row ms-bgColor-neutralDark ms-fontColor-white">
    <div className="anchor" id="aFooter" />
    <div className="footer-copyright">
      <p>© 2017 Microsoft</p>
    </div>
    <div className="footer-links">
      <Link title="Useful link 1" href="#">Useful link 1</Link>
      <Link title="Useful link 1" href="#">Useful link 1</Link>
      <Link title="Useful link 1" href="#">Useful link 1</Link>
      <Link title="Useful link 1" href="#">Useful link 1</Link>
    </div>
  </div>
);

export default Footer;
