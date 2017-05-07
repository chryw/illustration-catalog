import * as React from 'react';
import { Image } from 'office-ui-fabric-react/lib/index';

const GalleryItem = props => (
  <div className="gallery-item-wrapper">
    <div className="gallery-item-thumbnail">
      <Image src={'http://placehold.it/800x350/005a9e/ffffff'} alt={`${props.title}`} />
    </div>
    <div className="gallery-item-meta ms-font-m">
      <div className="gallery-item-title">
        {` ${props.title} `}
      </div>
      <div className="gallery-item-description">
        {` ${props.description} `}
      </div>
    </div>
  </div>
);


GalleryItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
};

GalleryItem.defaultProps = {
  description: 'Refer to illustration title.',
};

export default GalleryItem;
