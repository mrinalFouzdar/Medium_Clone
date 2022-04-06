import { createStore, combineReducers } from "redux";
import { IsAuthReducer } from "./IsAuth/reducer";
import { setdisplayReducer } from "./Theme/reducer";
const rootReducer = combineReducers({
  IsAuth: IsAuthReducer,
  vis: setdisplayReducer,
});

export const store = createStore(rootReducer);
