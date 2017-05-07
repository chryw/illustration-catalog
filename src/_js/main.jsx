import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as promise from 'es6-promise';
import App from './components/App.jsx';

promise.polyfill();

ReactDOM.render(<App />, document.getElementById('App'));
