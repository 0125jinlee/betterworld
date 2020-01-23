const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  data: null
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "FETCHED_DATA") {
    return {
      ...state,
      data: "test"
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.dispatch({ type: "FETCHED_DATA" });

// Subscription
