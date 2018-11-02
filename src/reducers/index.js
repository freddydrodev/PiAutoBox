import { combineReducers } from "redux";

export default combineReducers({
  services: (state = [], action) => {
    switch (action.type) {
      case "update_services":
        return action.services;
      default:
        return state;
    }
  }
});
