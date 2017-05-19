import * as React from 'react';
import Gallery from './Library/Gallery.jsx';

const Library = () => (
  <div className="library">
    <Gallery
      dataurl="illustrations.json?v=@@hash-data-json"
    />
  </div>
);

export default Library;
