// This is a dummy component just for testing
import * as React from 'react';
import { Button, ContextualMenu, DirectionalHint } from 'office-ui-fabric-react/lib/index';

export default class TestComponent extends React.Component {
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
      <div>
        <Button onClick={this.onClick} id="TestComponent">Test</Button>
        { this.state.isContextMenuVisible ? (
          <ContextualMenu
            shouldFocusOnMount={false}
            target={'#TestComponent'}
            onDismiss={this.onDismiss}
            directionalHint={DirectionalHint.bottomRightEdge}
            items={[
              {
                key: 'test',
                name: 'Test',
              },
            ]}
          />
        ) : (null)}
      </div>
    );
  }
}
