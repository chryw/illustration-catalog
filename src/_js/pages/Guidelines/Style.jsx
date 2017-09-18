import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Image } from 'office-ui-fabric-react/lib/index';


const Style = ({ match }) => (
  <section>
    <div className="anchor" id="style" />
    <h2>Style<NavLink to={`${match.params.id}#style`} title="Style">#</NavLink></h2>
    <div>
      <p>The style for illustrations is clear and clean. As a rule we try to communicate the message in a simple way – with one main element and with one or two supporting elements wherever possible. All elements should be essential to the message. If you can delete an element and still communicate the concept, then it doesn’t need the extra element and will probably communicate more easily without it. We don’t add elements for decorative purposes.</p>
      <Image
        src="images/guidelines-style-01.png"
        alt="Example image of illustration style."
      />
      <p>The goal is to create images that communicate the message quickly and clearly, in a helpful supportive manner, as opposed to an image that adds nothing to the issue at hand. We want them to be friendly and helpful, suggesting to the viewer that &quot;oops there is some missing element here, and we will help you to solve it&quot;.</p>
    </div>
  </section>
);

Style.PropTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default Style;
