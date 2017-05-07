import * as React from 'react';
import { SearchBox, List } from 'office-ui-fabric-react/lib/index';
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
      limit: 0,
      count: 0,
    };
    this.limitResult = (data, amount) => {
      let dataLimited;
      if (amount) {
        dataLimited = data.slice(0, amount);
      } else {
        dataLimited = data;
      }
      return dataLimited;
    };
    this.filterResult = (data) => {
      const isPublish = item => item.publish === 1;
      return data.filter(isPublish);
    };
  }

  componentWillMount() {
    // get data
    axios.get(this.props.dataurl)
      .then((response) => {
        // grab props and set some initials
        this.setState({
          limit: this.props.limit || null,
        });
        // filter and limit
        this.setState({
          items: this.limitResult(
            this.filterResult(response.data),
            this.state.limit),
          itemsFiltered: this.limitResult(
            this.filterResult(response.data),
            this.state.limit),
        });
        // update count
        this.setState({
          count: this.state.itemsFiltered.length,
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
    const items = this.state.items;
    let itemsFiltered = items;
    let count = itemsFiltered.length;
    return (
      <div className="gallery">
        <div className="anchor" id="aGallery" />
        <h3>Gallery</h3>
        <div className="search">
          <SearchBox
            onChange={(value) => {
              const query = value.toLowerCase();
              itemsFiltered = items.filter((item) => {
                const metadata = `${item.title.toLowerCase()} ${item.keywords ? item.keywords.join(' ').toLowerCase() : ''}`;
                return metadata.indexOf(query) >= 0;
              });
              count = itemsFiltered.length;
              this.setState({
                itemsFiltered,
                count,
              });
            }}
          />
        </div>
        <List
          className="gallery-body"
          items={this.state.itemsFiltered}
          getItemCountForPage={this.getItemCountForPage}
          getPageHeight={this.getPageHeight}
          renderedWindowsAhead={4}
          onRenderCell={item => (
            <div
              className="gallery-item"
              style={{
                width: (100 / this.columnCount) + '%'
              }}
            >
              <GalleryItem
                id={item.id}
                title={item.title}
                description={item.description}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

Gallery.propTypes = {
  dataurl: React.PropTypes.string.isRequired,
  limit: React.PropTypes.number,
};

Gallery.defaultProps = {
  limit: 0,
};
