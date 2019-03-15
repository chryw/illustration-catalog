import * as React from 'react';
import PropTypes from 'prop-types';
import { TextField, FocusZone, List } from 'office-ui-fabric-react/lib/index';
import * as axios from 'axios';
import GalleryItem from './GalleryItem';

const ROWS_PER_PAGE = 3;
const MAX_ROW_HEIGHT = 300;

export default class Gallery extends React.Component {
  constructor() {
    super();
    this.positions = {};
    this.getItemCountForPage = this.getItemCountForPage.bind(this);
    this.getPageHeight = this.getPageHeight.bind(this);
    this.state = {
      items: [],
      filteredItems: [],
    };

    this.filterResult = (query) => {
      let filteredItems = this.state.items;

      filteredItems = query
        ? filteredItems.filter(item => `${item.title.toLowerCase()} ${item.keywords.join(' ').toLowerCase()}`.indexOf(query.toLowerCase()) >= 0)
        : filteredItems;

      this.setState({ filteredItems });
    };
  }

  componentWillMount() {
    // get data
    axios.get(this.props.dataurl).then((response) => {
      console.log(typeof response.data);
      const items = response.data.filter(item => item.publish === 1);
      const filteredItems = items;

      // set state
      this.setState({ items, filteredItems });
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
    const resultCountText = (this.state.filteredItems.length === this.state.items.length)
      ? ''
      : ` ${this.state.filteredItems.length} of ${this.state.items.length} shown`;

    return (
      <div className="gallery">
        <div className="gallery-search">
          <TextField label={`Filter by title or keywords ${resultCountText}`} onBeforeChange={this.filterResult} />
        </div>
        <div className="gallery-list">
          <FocusZone>
            <List
              className="gallery-body"
              items={this.state.filteredItems}
              renderedWindowsAhead={4}
              getItemCountForPage={this.getItemCountForPage}
              getPageHeight={this.getPageHeight}
              onRenderCell={item => (
                <div
                  className="gallery-item"
                  style={{
                    width: `${100 / this.columnCount}%`,
                    height: `${this.columnWidth}px`,
                  }}
                >
                  <GalleryItem
                    {...item}
                  />
                </div>
              )}
            />
          </FocusZone>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  dataurl: PropTypes.string.isRequired,
};
