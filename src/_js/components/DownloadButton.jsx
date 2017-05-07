import * as React from 'react';
import { Button, ContextualMenu, DirectionalHint } from 'office-ui-fabric-react/lib/index';

export default class DownloadButton extends React.Component {
  constructor() {
    super();
    this.state = {
      isContextMenuVisible: false,
      showCallout: false,
    };
    this.onClick = this.onClick.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  onClick(e) {
    this.setState({
      target: e.target,
      isContextMenuVisible: true,
    });
  }
  onDismiss() {
    this.setState({
      isContextMenuVisible: false,
    });
  }

  render() {
    return (
      <div className="vsil-download-button">
        <Button id={`Button_${this.props.id}`} onClick={this.onClick}>Download</Button>
        { this.state.isContextMenuVisible ? (
          <ContextualMenu
            shouldFocusOnMount={false}
            target={`#Button_${this.props.id}`}
            onDismiss={this.onDismiss}
            directionalHint={DirectionalHint.bottomLeftEdge}
            items={this.props.items}
          />
        ) : (null)}
      </div>
    );
  }
}

DownloadButton.propTypes = {
  id: React.PropTypes.number.isRequired,
  items: React.PropTypes.arrayOf,
};

DownloadButton.defaultProps = {
  items: [
    {
      key: 'default',
      name: 'default',
    },
  ],
};
