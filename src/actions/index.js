import { SELECT_SERVICE, UPDATE_SERVICE } from "./actionTypes";

export const updateServices = services => ({ type: UPDATE_SERVICE, services });

export const selectService = service => ({
  type: SELECT_SERVICE,
  service
});
