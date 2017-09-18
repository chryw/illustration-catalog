import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/index';

class SiteNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <Nav
        onLinkClick={this.onClickHandler}
        className={this.state.active ? 'active' : ''}
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
    );
  }
}

export default SiteNav;
