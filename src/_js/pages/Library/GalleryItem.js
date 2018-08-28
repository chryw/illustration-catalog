import * as React from 'react';
import PropTypes from 'prop-types';
import { assign } from 'office-ui-fabric-react/lib/Utilities';
import { Image, Panel, PanelType, CommandBar } from 'office-ui-fabric-react/lib/index';

const formatTitle = (str) => {
  const removeCategory = str.split('-').slice(1).join(' ');
  return removeCategory.charAt(0).toUpperCase() + removeCategory.slice(1);
};

const formatKeywords = arr => arr.join(', ');

export default class GalleryItem extends React.Component {
  constructor() {
    super();
    this.state = {
      showPanel: false,
      backgroundColor: 'checker',
    };
  }

  setShowPanel(showPanel) {
    return () => {
      this.setState({ showPanel });
    };
  }

  setBackgroundColor(backgroundColor) {
    return () => {
      if (backgroundColor === 'checker') {
        this.setState({ backgroundColor: 'dark' });
      }
      if (backgroundColor === 'dark') {
        this.setState({ backgroundColor: 'light' });
      }
      if (backgroundColor === 'light') {
        this.setState({ backgroundColor: 'checker' });
      }
    };
  }

  render() {
    const imageProps = {
      src: `illustrations/${this.props.title}.svg`,
    };
    const menuItems = [
      {
        key: 'downloadPng',
        icon: 'Photo2',
        name: 'Download PNG',
        href: `illustrations/${this.props.title}.png`,
        download: true,
      },
      {
        key: 'downloadSvg',
        icon: 'FileCode',
        name: 'Download SVG',
        href: `illustrations/${this.props.title}.svg`,
        download: true,
      },
      {
        key: 'changeBackground',
        icon: 'BackgroundColor',
        name: 'Change background',
        onClick: this.setBackgroundColor(this.state.backgroundColor),
      },
      {
        key: 'askAQuestion',
        icon: 'Mail',
        name: 'Ask a question',
        href: `mailto:v-cowang@microsoft.com?Subject=VSImages inquiry regarding [${this.props.title}]`,
        target: '_top',
      },
    ];
    const miniMenuItems = menuItems.slice(0, 2).map(item => assign({}, item, {
      iconOnly: true,
    }));

    return (
      <div className="gallery-item-wrapper">
        <div
          role="link"
          tabIndex={0}
          className={
            `gallery-item-thumbnail ${this.state.backgroundColor}`
          }
          onClick={this.setShowPanel(true)}
          onKeyDown={this.setShowPanel(true)}
        >
          <Image
            {...imageProps}
            alt={`${formatTitle(this.props.title)}`}
          />
          <div className="gallery-item-meta" data-keywords={`${formatKeywords(this.props.keywords)}`}>
            <h2 className="gallery-item-title">
              {`${formatTitle(this.props.title)}`}
            </h2>
            <div className="gallery-item-description">
              {`${this.props.description}`}
            </div>
          </div>
        </div>
        <CommandBar
          items={miniMenuItems}
        />
        <div className="gallery-item-detailPanel">
          <Panel
            isOpen={this.state.showPanel}
            onDismiss={this.setShowPanel(false)}
            type={PanelType.smallFluid}
            headerText={formatTitle(this.props.title)}
          >
            <div className="gallery-item-detail-meta">
              <p>{this.props.description}</p>
              <CommandBar
                items={menuItems}
              />
            </div>
            <div className={`gallery-item-detail-thumbnail ${this.state.backgroundColor}`}>
              <Image
                {...imageProps}
                alt={`${formatTitle(this.props.title)}`}
              />
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}


GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

GalleryItem.defaultProps = {
  description: 'Refer to illustration title.',
  keywords: 'Refer to illustration title',
};
