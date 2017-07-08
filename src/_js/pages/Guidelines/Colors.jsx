import * as React from 'react';
import * as axios from 'axios';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Link } from 'office-ui-fabric-react/lib/index';
import ColorBlock from './ColorBlock.jsx';

class Colors extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    axios.get('colors.json')
    .then((response) => {
      this.setState({
        items: response.data,
      });
    });
  }

  render() {
    const colorBlocks = this.state.items.map(item => (
      <ColorBlock
        background={item.background}
        foreground={item.foreground}
      />
  ));
    return (
      <section>
        <div className="anchor" id="colors" />
        <h2>Colors<NavLink to={`${this.props.match.params.id}#colors`} title="Colors">#</NavLink></h2>
        <div>
          <p>We use colors from the <Link href="https://microsoft.sharepoint.com/teams/BrandCentral/Pages/Illustrations-Microsoft.aspx">Microsoft illustration color palette</Link>. While the palette has a wide selection of colors and shades, we only use limited amount of colors at a time to create clean and easy to read illustrations. Also keep in mind that the primary theme color of the product UI is blue (<Link href="http://dev.office.com/fabric#/styles/colors" >Fabric Colors</Link>). Colors used in illustrations should be harmonious with the environment.</p>
          <div className="colors-table">
            { colorBlocks }
          </div>
        </div>
      </section>
    );
  }
}

Colors.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default Colors;
