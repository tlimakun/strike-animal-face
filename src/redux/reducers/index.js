import { combineReducers } from "redux";

import level from "./level-reducers";

export default combineReducers({
  level: level,
});
