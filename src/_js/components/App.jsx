import * as React from 'react';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Overview from './Overview.jsx';
import Footer from './Footer.jsx';

const App = () => (
  <div className="ms-bgColor-neutralPrimary">
    <div className="ms-Grid wrapper">
      <Header />
      <div className="ms-Grid-row ms-bgColor-white ms-fontColor-black body">
        <Overview />
        <Gallery
          dataurl="illustrations.json?v=@@hash-data-json"
        />
      </div>
      <Footer />
    </div>
  </div>
);

export default App;
