import { createStore,applyMiddleware } from 'redux';
import inputReducer from '../reducers/inputs';
import { composeWithDevTools } from 'redux-devtools-extension';

// Store creation

export const store = createStore(inputReducer, composeWithDevTools(applyMiddleware(),));