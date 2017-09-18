import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as promise from 'es6-promise';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import SiteNav from './components/SiteNav.jsx';
import Footer from './components/Footer.jsx';
import Library from './pages/Library.jsx';
import Guidelines from './pages/Guidelines.jsx';
import Resources from './pages/Resources.jsx';

promise.polyfill();

ReactDOM.render((
  <HashRouter basename="/">
    <div className="ms-Grid wrapper">
      <Header />
      <div className="ms-Grid-row ms-bgColor-white ms-fontColor-black body">
        <div className="nav-menu ms-Grid-col ms-sm12 ms-md2">
          <SiteNav />
        </div>
        <div className="content ms-Grid-col ms-sm12 ms-md10 ms-bgColor-neutralLight">
          <Route exact path="/" component={Library} />
          <Route path="/library" component={Library} />
          <Route path="/guidelines" component={Guidelines} />
          <Route path="/resources" component={Resources} />
        </div>
      </div>
      <Footer />
    </div>
  </HashRouter>
), document.getElementById('App'));
