import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/index';

const Footer = () => (
  <div className="footer ms-Grid-row ms-bgColor-neutralDark ms-fontColor-white">
    <div className="anchor" id="aFooter" />
    <div className="footer-copyright">
      <span>© 2017 Microsoft</span>
    </div>
    <div className="footer-links">
      <div className="footer-link">
        <Link title="Request new illustrations" href="http://aka.ms/dduxillu">Request new illustrations</Link>
      </div>
    </div>
  </div>
);

export default Footer;
