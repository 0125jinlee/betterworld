import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import searchReducer from "./reducers/searchReducer";
import authReducer from "./reducers/authReducer";
import fetchPostsReducer from "./reducers/fetchPostsReducer";

const rootReducer = combineReducers({
  searchReducer: searchReducer,
  authReducer: authReducer,
  fetchPostsReducer: fetchPostsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
