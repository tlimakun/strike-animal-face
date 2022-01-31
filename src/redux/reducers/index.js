import { combineReducers } from "redux";

import level from "./level-reducers";
import round from "./round-reducers";
import health from "./health-reducers";
import coin from "./coin-reducers";

export default combineReducers({
  level: level,
  round: round,
  health: health,
  coin: coin,
});
