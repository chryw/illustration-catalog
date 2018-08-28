import * as React from 'react';
import Gallery from './Library/Gallery';

const Library = () => (
  <Gallery
    dataurl="data/data.json"
    urlprefix="https://vsicons.blob.core.windows.net/illustrations"
  />
);

export default Library;
