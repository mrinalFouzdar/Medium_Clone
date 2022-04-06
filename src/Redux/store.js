import { createStore, combineReducers } from "redux";
import { IsAuthReducer } from "./IsAuth/reducer";
import { setdisplayReducer } from "./Theme/reducer";
import {Blogreducer} from "./blogre/reducer"
const rootReducer = combineReducers({
  IsAuth: IsAuthReducer,
  vis: setdisplayReducer,
  bologData:Blogreducer
});

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
