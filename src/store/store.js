import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import searchReducer from "./reducers/searchReducer";
import authReducer from "./reducers/authReducer";
import fetchReducer from "./reducers/fetchReducer";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
  searchReducer: searchReducer,
  authReducer: authReducer,
  fetchReducer: fetchReducer,
  postReducer: postReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
