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
      <p>The goal is to create images that communicate the message quickly and clearly, in a helpful supportive manner, as opposed to an image that adds nothing to the issue at hand. We want them to be friendly and helpful, suggesting to the viewer that &quot;oops there is some missing element here, and we will help you to solve it&quot;.</p>
      <p>The below illustration has too many small elements trying to cover multiple aspects of the product. The illustration ended up loosing focus and not conveying any meaningful topic. Nor it makes the illustration visually appealing to put many abstract icons loosely instead of creating a concrete object or scene that connects to real-life experience.</p>
      <Image
        src="images/guidelines-style-before.png"
        alt="A bad example of using too many elements in one illustration."
      />
      <p>This example though, uses simple but solid real-life objects. The metaphor also ties to the text so it is an effective visual cue that helps users understand the context and accomplish their tasks.</p>
      <Image
        src="images/guidelines-style-after.png"
        alt="A good illustration is simple and resonates with real-life experience."
      />

    </div>
  </section>
);

Style.PropTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default Style;
