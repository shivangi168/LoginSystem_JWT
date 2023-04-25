

import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import rootReducer from "./reducers.js"

// combine all reducers
// const combinedReducer = combineReducers({
//   rootReducer: rootReducer
// });

// create new store
// const store = configureStore(rootReducer, applyMiddleware(thunk));
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
  });
  

export default store;

