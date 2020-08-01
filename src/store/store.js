import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import searchReducer from "./reducers/searchReducer";
import authReducer from "./reducers/authReducer";
import modalReducer from "./reducers/modalReducer";

const rootReducer = combineReducers({
  searchReducer: searchReducer,
  authReducer: authReducer,
  modalReducer: modalReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
