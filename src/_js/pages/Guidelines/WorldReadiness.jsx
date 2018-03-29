import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Link } from 'office-ui-fabric-react/lib/index';

const WorldReadiness = ({ match }) => (
  <section>
    <div className="anchor" id="worldreadiness" />
    <h2>World Readiness<NavLink to={`${match.params.id}#worldreadiness`} title="World Readiness">#</NavLink></h2>
    <div>
      <p>We should always review image for world readiness as we design, convert, update and deliver image assets. With the general guidelines in mind, if during the image production process there is still a red flag and you are not able to answer the question, do not deliver assets. Instead, work with the following contacts to get approval or answer:</p>
      <ul>
        <li>
          <p><strong>The product owners</strong> - Sometimes the owners have already gotten review and approval for the use of high risk design elements on their end. Or if not, some owners are willing to initiate the query from their end as they can provide more accurate usage context.</p>
        </li>
        <li>
          <p><strong><Link href="mailto:uxboard@microsoft.com">DevDiv UXBoard</Link></strong> - You may get some quick answers here too if someone has encountered similar issues before.</p>
        </li>
        <li>
          <p><strong><Link href="http://CELAweb/">CELAweb</Link></strong> - CELA can answer questions related to the usage of 3rd party brand images, or 1st party brand images that do not have clear usage guidance, and the use and distribution of open source assets. Vendors do not have assigned CELA contacts. Please work with your manager, or the product owner's CELA contact.</p>
        </li>
        <li>
          <p><strong><Link href="https://globalready.azurewebsites.net/Pages/GuidelinesforGraphics">gpweb - guidelines for graphics</Link></strong> - There are some general geopolitical guidelines on the website. You still need to use a lot of your own judgement to see if there is any red flag such as:</p>
          <ul>
            <li>Body parts like hands, fingers, eyes, etc. (There are a few body part graphics approved on case-by-case review, but you still need to check)</li>
            <li>Human involved graphics with unbalanced diversity (gender, skin colors, ethical appearances, disabilities, etc.).</li>
            <li>Relational symbols, animals (e.g.: stars and crescent moon, elephant, etc.)</li>
            <li>World map/globe clearly indicates country boundaries</li>
          </ul>
        </li>
      </ul>
      <p>When you cannot find a clear answer, log a <Link href="https://globalready.azurewebsites.net/IMS/GRInquiry">GR Inquiry</Link> and include enough context to get faster response. </p>
      <p>When handing off assets, you should be confident that:</p>
      <ul>
        <li>the assets meet copyright and geopolitical requirement based on your judgement, or</li>
        <li>you have someone else (e.g.: the product owner) who is responsible for getting clearance after you delivered the assets.</li>
      </ul>
    </div>
  </section>
);

WorldReadiness.PropTypes = {
  match: PropTypes.object.isRequired,
};

export default WorldReadiness;
