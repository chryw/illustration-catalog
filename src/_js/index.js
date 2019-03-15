import { initializeIcons } from '@uifabric/icons';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as promise from 'es6-promise';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import SiteNav from './components/SiteNav';
import Footer from './components/Footer';
import Library from './pages/Library';
import Guidelines from './pages/Guidelines';
import Resources from './pages/Resources';


promise.polyfill();
initializeIcons();

ReactDOM.render((
  <HashRouter basename="/">
    <div className="ms-Grid wrapper">
      <Header />
      <div className="ms-Grid-row ms-bgColor-white ms-fontColor-black body">
        <SiteNav />
        <div className="content ms-Grid-col ms-sm12 ms-md10 ms-bgColor-neutralLight">
          <Route exact path="/" component={Library} />
          <Route path="/library" component={Library} />
          <Route path="/guidelines" component={Guidelines} />
          <Route path="/resources" component={Resources} />
        </div>
      </div>
      <Footer />
    </div>
  </HashRouter>), document.getElementById('App'));
