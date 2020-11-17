import { createStore, combineReducers } from 'redux';
import { dateFilterReducer } from './redux/reducers/dateFilter';
import { eventsListReducer } from './redux/reducers/eventsList';

const rootReducer = combineReducers({
  dateFilter: dateFilterReducer,
  eventsList: eventsListReducer
})

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;