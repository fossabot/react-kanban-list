import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import { Router } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import Localforage from 'localforage'

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { configureStore } from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import './style/style.scss';

const db = Localforage.createInstance({
  name: 'kanban_react',
  driver: Localforage.INDEXEDDB,
  description: 'Used to store panels and cards',
  version: 1.0
})

db
  .getItem('kanban')
  .then(value => value || undefined)
  .then(value => configureStore(value))
  .then((store) => {
    ReactDOM.render(
      <Provider store={ store }>
        <Router>
          <App />
        </Router>
      </Provider>
    ,document.getElementById('root'));
  });

serviceWorker.unregister();
