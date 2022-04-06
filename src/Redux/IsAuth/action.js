export const IS_Authorized = "IS_Authorized";
export const After_Auth = "After_Auth";
export const IS_Authorized_data = "IS_Authorized_data";

export const isAuthorized = (payload) => ({
  type: IS_Authorized,
  payload,
});
export const after_Auth = (payload) => ({
  type: After_Auth,
  payload,
});
export const is_Authorized_data = (payload) => ({
  type: IS_Authorized_data,
  payload,
});
