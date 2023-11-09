import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { todosReducers } from "./reducers/todosReducer.js";
import { tabReducer } from "./reducers/tabReducer.js";

const reducer = combineReducers({
  todos: todosReducers,
  currentTab: tabReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
