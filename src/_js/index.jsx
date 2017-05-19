import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as promise from 'es6-promise';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Library from './pages/Library.jsx';
import Guidelines from './pages/Guidelines.jsx';

promise.polyfill();

ReactDOM.render((
  <Router>
    <div className="ms-bgColor-neutralPrimary">
      <div className="ms-Grid wrapper">
        <Header />
        <div className="ms-Grid-row ms-bgColor-white ms-fontColor-black body">
          <Route exact path="/" component={Library} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/guidelines" component={Guidelines} />
        </div>
        <Footer />
      </div>
    </div>
  </Router>
), document.getElementById('App'));
