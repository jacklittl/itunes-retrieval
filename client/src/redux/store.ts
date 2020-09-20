import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import formReducer from './form/form.reducer';

const rootReducer = combineReducers({
  form: formReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;