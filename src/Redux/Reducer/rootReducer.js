import { combineReducers } from "redux";
import { LocationReducer } from "./LocationReducer";
export const rootReducer = combineReducers({
  LocationReducer: LocationReducer,
});
