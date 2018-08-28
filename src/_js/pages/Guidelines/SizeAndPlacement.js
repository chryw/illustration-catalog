import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Image } from 'office-ui-fabric-react/lib/Image';


const SizeAndPlacement = ({ match }) => (
  <section>
    <div className="anchor" id="sizeandplacement" />
    <h2>
      {'Size and placement '}
      <NavLink to={`${match.params.id}#sizeandplacement`} title="Size and placement">
        {'#'}
      </NavLink>
    </h2>
    <h3>
      {'VSTS Zero Data'}
    </h3>
    <p>
      {'We use illustrations in VSTS for &quot;Zero Data&quot; experience to help users understand the context and what to do in order to populate data. Below is the redline guide for Zero Data component, including illustration size.'}
    </p>
    <Image
      src="images/guidelines-size-zerodata.png"
      alt="VSTS Zero Data component illustration sizing guidelines."
    />
    <h3>
      {'Illustration in place of potential content'}
    </h3>
    <p>
      {'In most &quot;Zero Data&quot; pages, the illustration is used as a placeholder when there is no data/content yet.'}
    </p>
    <Image
      src="images/guidelines-placement-01.png"
      alt="VSTS Zero Data component illustration center placement"
    />
    <h3>
      {'Illustration refers to another section'}
    </h3>
    <p>
      {'Sometimes we use an illustration as a visual hint that refer to another section of the page.'}
    </p>
    <p>
      {'In this example, we use an right pointing arrow to lead user&#39;s attention to the right column.'}
    </p>
    <Image
      src="images/guidelines-placement-02.png"
      alt="VSTS illustration points to right"
    />
    <p>
      {'In this example, the illustration is a literal representation of how users should interact with the list on the right column.'}
    </p>
    <Image
      src="images/guidelines-placement-03.png"
      alt="VSTS illustration is a literal representation of the UI"
    />
  </section>
);

SizeAndPlacement.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default SizeAndPlacement;
