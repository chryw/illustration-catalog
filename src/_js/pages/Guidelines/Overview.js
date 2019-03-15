import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Overview = ({ match }) => (
  <section>
    <div className="anchor" id="overview" />
    <h2>Overview<NavLink to={`${match.params.id}#overview`} title="Overview">#</NavLink></h2>
    <div>
      <p>
        {'The illustrations on this site were created for DevDiv products including VSTS and VisualStudio.com. You may use these shared design resources with or without modification as placeholders or in prototypes, internal documents, blogs, presentations, and marketing materials. Although some of these illustrations are already in use in existing products and sites, they might not be appropriate in a different context. Any illustration that appears in a product that will be released to the public must pass geopolitical, legal, and business reviews.'}
      </p>
    </div>
  </section>
);

Overview.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default Overview;
