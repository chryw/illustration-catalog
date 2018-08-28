import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Link, Image } from 'office-ui-fabric-react/lib/index';


const UsingPeople = ({ match }) => (
  <section>
    <div className="anchor" id="usingpeople" />
    <h2>
      {'Using People'}
      <NavLink to={`${match.params.id}#people`} title="Using People">
        {'#'}
      </NavLink>
    </h2>
    <div>
      <p>
        {'While people can be very expressive in communicating things, we use them sparingly. We are moving away from the existing Microsoft geeky developer people to a somewhat more natural approach to features, hands etc, yet with a similar level of simplicity.'}
      </p>
      <Image
        src="images/guidelines-usingpeople-01.png"
        alt="Example image of using people in illustrations."
      />
      <p>
        {'It is preferable to create visual solutions that do not use or rely on using people, hands or other body parts. While they may be necessary in certain contexts, we must always conform to '}
        <Link href="http://gpweb/" title="Microsoft World Readiness">
          {'Microsoft World Readiness'}
        </Link>
        {'.'}
      </p>
      <p>
        {'When the concept or process does not lend itself to clear visual solutions, do not add people who are not essential to the issue – such as someone simply holding a laptop but not demonstrating a solution. Visually obscure concepts can be addressed by alluding to the elements of the process such as gears for development, databases for storage etc. This approach results in more infographic, designed symbolic images. Avoid creating &quot;scenes&quot;, which happens when too many supporting elements are added, such as background scenery or non-essential office equipment.'}
      </p>
    </div>
  </section>
);

UsingPeople.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default UsingPeople;
