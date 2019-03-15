import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

const Footer = () => (
  <div className="footer ms-Grid-row ms-bgColor-neutralDark ms-fontColor-white">
    <div className="footer-copyright ms-Grid-col ms-sm12 ms-md4">
      <span>
        {'© 2017 Microsoft'}
      </span>
    </div>
    <div className="footer-links ms-Grid-col ms-sm12 ms-md8">
      <div className="footer-link">
        <Link title="Request new illustrations" href="http://aka.ms/dduxillu">
          {'Request new illustrations'}
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
