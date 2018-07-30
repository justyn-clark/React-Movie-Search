import { createStore, combineReducers, applyMiddleware } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import thunk from 'redux-thunk';
import search from '../app/domains/Search/duck';
import theatre from '../app/domains/Theatre/duck';

const reducers = combineReducers({
  search,
  theatre
});

export default createStore(
  enableBatching(reducers), 
  applyMiddleware(thunk)
);