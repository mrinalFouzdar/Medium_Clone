import { IS_Authorized } from "./action";
export const IsAuthReducer = (store = { IsAuth: false }, action) => {
  switch (action.type) {
    case IS_Authorized:
      return {
        ...store,
        IsAuth: action.payload,
      };
    default:
      return store;
  }
};
