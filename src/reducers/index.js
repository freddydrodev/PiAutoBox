import { combineReducers } from "redux";
import { UPDATE_SERVICE, SELECT_SERVICE } from "../actions/actionTypes";

export default combineReducers({
  //let re-base update the service list
  services: (state = [], action) => {
    switch (action.type) {
      case UPDATE_SERVICE:
        return action.services;
      default:
        return state;
    }
  },

  //select a new service on click
  selectedService: (state = 0, action) => {
    switch (action.type) {
      case SELECT_SERVICE:
        return action.service;
      default:
        return state;
    }
  }
});
