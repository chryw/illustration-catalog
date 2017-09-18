import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, Link } from 'office-ui-fabric-react/lib/index';

const formatTitle = (str) => {
  const removeCategory = str.split('-').slice(1).join(' ');
  return removeCategory.charAt(0).toUpperCase() + removeCategory.slice(1);
};

const formatKeywords = arr => arr.join(', ');

const GalleryItem = props => (
  <div className="gallery-item-wrapper">
    <div className="gallery-item-thumbnail">
      <Image
        src={`${props.urlprefix}/${props.title}.png`}
        alt={`${formatTitle(props.title)}`}
      />
    </div>
    <div className="gallery-item-meta" data-keywords={`${formatKeywords(props.keywords)}`}>
      <h2 className="gallery-item-title">
        {`${formatTitle(props.title)}`}
      </h2>
      <div className="gallery-item-description">
        {`${props.description}`}
      </div>
      <div className="gallery-item-download">
        <span className="icon ms-Icon ms-Icon--Download" />
        <Link title="SVG" href={`${props.urlprefix}/${props.title}.svg`} download>SVG</Link>
        <Link title="PNG" href={`${props.urlprefix}/${props.title}.png`} download>PNG</Link>
      </div>
    </div>
  </div>
);


GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.array,
  urlprefix: PropTypes.string.isRequired,
};

GalleryItem.defaultProps = {
  description: 'Refer to illustration title.',
  keywords: 'Refer to illustration title',
};

export default GalleryItem;
