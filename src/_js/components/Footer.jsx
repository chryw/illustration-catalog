import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/index';

const Footer = () => (
  <div className="footer ms-Grid-row ms-bgColor-neutralDark ms-fontColor-white">
    <div className="anchor" id="aFooter" />
    <div className="footer-copyright">
      <p>© 2017 Microsoft</p>
    </div>
    <div className="footer-links">
      <div className="footer-link">
        <Link title="Request new illustrations" href="http://aka.ms/dduxillu">Request new illustrations</Link>
      </div>
      <div className="footer-link">
        <Link title="Download guideline deck" href="#">Download guideline deck</Link>
      </div>
    </div>
  </div>
);

export default Footer;
