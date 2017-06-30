import * as React from 'react';
import Gallery from './Library/Gallery.jsx';

const Library = () => (
  <div className="library">
    <Gallery
      dataurl="data.json?v=@@data-json"
    />
  </div>
);

export default Library;
