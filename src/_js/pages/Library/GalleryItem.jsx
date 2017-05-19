import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, Link } from 'office-ui-fabric-react/lib/index';

const formatTitle = str => (str.replace(/([A-Z])/g, ' $1').replace(/^./, str2 => (str2.toUpperCase())));

const GalleryItem = props => (
  <div className="gallery-item">
    <div className="gallery-item-thumbnail">
      <Image
        src={`https://vsicons.blob.core.windows.net/assets/Illustrations/${props.title}/${props.title}.png`}
        alt={`${formatTitle(props.title)}`}
      />
    </div>
    <div className="gallery-item-meta">
      <h2 className="gallery-item-title">
        {`${formatTitle(props.title)}`}
      </h2>
      <div className="gallery-item-description">
        {` ${props.description} `}
      </div>
      <div className="gallery-item-download">
        <span className="icon ms-Icon ms-Icon--Download" />
        <Link title="SVG" href={`https://vsicons.blob.core.windows.net/assets/Illustrations/${props.title}/${props.title}.svg`} download>SVG</Link>
        <Link title="PNG" href={`https://vsicons.blob.core.windows.net/assets/Illustrations/${props.title}/${props.title}.png`} download>PNG</Link>
        <Link title="AI" href={`https://vsicons.blob.core.windows.net/assets/Illustrations/${props.title}/${props.title}.ai`} download>AI</Link>
      </div>
    </div>
  </div>
);


GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

GalleryItem.defaultProps = {
  description: 'Refer to illustration title.',
};

export default GalleryItem;
