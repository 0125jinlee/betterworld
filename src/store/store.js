import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import searchReducer from "./reducers/searchReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  searchReducer: searchReducer,
  authReducer: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
