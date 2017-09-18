import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Image } from 'office-ui-fabric-react/lib/index';


const Placement = ({ match }) => (
  <section>
    <div className="anchor" id="placements" />
    <h2>Placement<NavLink to={`${match.params.id}#placement`} title="Placement">#</NavLink></h2>
    <div>
      <p>Wherever possible, these visual images should be centered on the page, with the specific text underneath.</p>
      <Image
        src="images/guidelines-placement-01.png"
        alt="Example image of centered placement."
      />
      <p>On occasions where a significant amount of text is needed, the image can be flush left with text flush left in the next column.</p>
      <Image
        src="images/guidelines-placement-02.png"
        alt="Example image of left placement."
      />
    </div>
  </section>
);

Placement.PropTypes = {
  match: PropTypes.object.isRequired,
};

export default Placement;
