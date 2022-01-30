import { combineReducers } from "redux";

import level from "./level-reducers";
import round from "./round-reducers";

export default combineReducers({
  level: level,
  round: round,
});
