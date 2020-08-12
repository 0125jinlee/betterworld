import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import searchReducer from "./reducers/searchReducer";
import authReducer from "./reducers/authReducer";
import savePostReducer from "./reducers/savePostReducer";

const rootReducer = combineReducers({
  searchReducer: searchReducer,
  authReducer: authReducer,
  savePostReducer: savePostReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
