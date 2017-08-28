import * as React from 'react';
import PropTypes from 'prop-types';
import { TextField, List } from 'office-ui-fabric-react/lib/index';
import * as axios from 'axios';
import GalleryItem from './GalleryItem.jsx';

const ROWS_PER_PAGE = 3;
const MAX_ROW_HEIGHT = 250;

export default class Gallery extends React.Component {
  constructor() {
    super();
    this.positions = {};
    this.getItemCountForPage = this.getItemCountForPage.bind(this);
    this.getPageHeight = this.getPageHeight.bind(this);
    this.state = {
      items: [],
      filteredItems: [],
      total: 0,
      pairedItems: [],
    };

    this.filterResult = (query) => {
      let filteredItems = this.state.items;
      let pairedItems = this.state.pairedItems;

      filteredItems = query ?
      filteredItems.filter(item => `${item.title.toLowerCase()} ${item.keywords.join(' ').toLowerCase()}`.indexOf(query.toLowerCase()) >= 0) :
      filteredItems;

      pairedItems = this.pairResult(filteredItems);
      this.setState({
        filteredItems,
        pairedItems,
      });
    };
  }

  componentWillMount() {
    // get data
    axios.get(this.props.dataurl)
      .then((response) => {
        const items = response.data.filter(item => item.publish === 1);
        const filteredItems = items;
        const total = items.length;

        // set state
        this.setState({
          items,
          filteredItems,
          total,
        });
      });
  }

  getItemCountForPage(itemIndex, surfaceRect) {
    if (itemIndex === 0) {
      this.columnCount = Math.ceil(surfaceRect.width / MAX_ROW_HEIGHT);
      this.columnWidth = Math.floor(surfaceRect.width / this.columnCount);
      this.rowHeight = this.columnWidth;
    }

    return this.columnCount * ROWS_PER_PAGE;
  }

  getPageHeight() {
    return this.rowHeight * ROWS_PER_PAGE;
  }

  render() {
    // search result count
    const resultCountText = (this.state.filteredItems.length === this.state.items.length) ? '' : ` ${this.state.filteredItems.length} of ${this.state.items.length} shown`;

    return (
      <div className="gallery">
        <div className="search">
          <TextField
            label={`Filter by title or keywords ${resultCountText}`}
            onBeforeChange={this.filterResult}
          />
        </div>
        <List
          className="gallery-body"
          items={this.state.filteredItems}
          renderedWindowsAhead={4}
          onRenderCell={item => (
            <GalleryItem
              id={item.id}
              title={item.title}
              keywords={item.keywords}
              description={item.description}
              style={{
                width: `${100 / this.columnCount}%`,
              }}
            />
          )}
        />
      </div>
    );
  }
}

Gallery.propTypes = {
  dataurl: PropTypes.string.isRequired,
};

Gallery.defaultProps = {
  limit: 0,
};
