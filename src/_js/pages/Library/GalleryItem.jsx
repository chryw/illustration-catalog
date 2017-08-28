import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, Link } from 'office-ui-fabric-react/lib/index';

const formatTitle = (str) => {
  const removeCategory = str.split('-').slice(1).join(' ');
  return removeCategory.charAt(0).toUpperCase() + removeCategory.slice(1);
};

const formatKeywords = arr => arr.join(', ');

const GalleryItem = props => (
  <div className="gallery-item" data-keywords={`${formatKeywords(props.keywords)}`}>
    <div className="gallery-item-thumbnail">
      <Image
        src={`https://vsicons.blob.core.windows.net/illustrations/${props.title}.png`}
        alt={`${formatTitle(props.title)}`}
      />
    </div>
    <div className="gallery-item-meta">
      <h2 className="gallery-item-title">
        {`${formatTitle(props.title)}`}
      </h2>
      <div className="gallery-item-description">
        {`${props.description}`}
      </div>
      <div className="gallery-item-download">
        <span className="icon ms-Icon ms-Icon--Download" />
        <Link title="SVG" href={`https://vsicons.blob.core.windows.net/illustrations/${props.title}.svg`} download>SVG</Link>
        <Link title="PNG" href={`https://vsicons.blob.core.windows.net/illustrations/${props.title}.png`} download>PNG</Link>
      </div>
    </div>
  </div>
);


GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf,
};

GalleryItem.defaultProps = {
  description: 'Refer to illustration title.',
  keywords: 'Refer to illustration title',
};

export default GalleryItem;
