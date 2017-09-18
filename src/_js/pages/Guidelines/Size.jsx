import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Image } from 'office-ui-fabric-react/lib/index';


const Size = ({ match }) => (
  <section>
    <div className="anchor" id="style" />
    <h2>Size<NavLink to={`${match.params.id}#size`} title="Size">#</NavLink></h2>
    <div>
      <p>The size ranges from a minimum 150x150 pixels to a maximum width of 450 pixels. There is a fixed height of 150 pixels. Images using heavy or solid color can be sized smaller within the area to feel balanced on the page.</p>
      <Image
        src="images/guidelines-size-01.png"
        alt="Example image of size."
      />
    </div>
  </section>
);

Size.PropTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default Size;
