import { createStore } from "redux";
import { IsAuthReducer } from "./IsAuth/reducer";
export const store = createStore(IsAuthReducer);
