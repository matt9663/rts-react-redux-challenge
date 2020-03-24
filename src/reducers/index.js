import termsReducer from './terms';
import articlesReducer from './articles';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  termsReducer,
  articlesReducer,
});

export default allReducers;

