import { Reducer } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

export const store = createStore(Reducer, composeWithDevTools());
