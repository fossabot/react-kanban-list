import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import panelsReducer from '../components/Panel/Panel.reducers';
import cardsReducer from '../components/Card/Card.reducers';

export default combineReducers({
  panelsReducer,
  cardsReducer,
  router: routerReducer,
});
