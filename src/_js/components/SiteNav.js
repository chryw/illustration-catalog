import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

class SiteNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.toggleNavMenu = this.toggleNavMenu.bind(this);
  }

  toggleNavMenu() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    return (
      <div className="site-nav ms-Grid-col ms-sm12 ms-md2">
        <button
          className="nav-button"
          onClick={this.toggleNavMenu}
        >
          <i className="ms-Icon ms-Icon--GlobalNavButton" />
        </button>
        <Nav
          onLinkClick={this.toggleNavMenu}
          className={`nav-menu ${this.state.expanded ? 'expanded' : 'collapsed'}`}
          groups={[
            {
              links:
              [
                {
                  name: 'Library',
                  url: '#/library',
                },
                {
                  name: 'Guidelines',
                  url: '#/guidelines',
                },
                {
                  name: 'Resources',
                  url: '#/resources',
                },
              ],
            },
          ]}
        />
      </div>
    );
  }
}

export default SiteNav;
