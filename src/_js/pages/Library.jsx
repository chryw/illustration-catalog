import * as React from 'react';
import Gallery from './Library/Gallery.jsx';

const Library = () => (
  <Gallery
    dataurl="data/data.json"
    urlprefix="https://vsicons.blob.core.windows.net/illustrations"
  />
);

export default Library;
