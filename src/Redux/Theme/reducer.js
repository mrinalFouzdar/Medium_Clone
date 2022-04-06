import { SET_DISPLAY } from "./action";
export const setdisplayReducer = (store = { vis: true }, action) => {
  switch (action.type) {
    case SET_DISPLAY:
      return {
        ...store,
        vis: action.payload,
      };
    default:
      return store;
  }
};
