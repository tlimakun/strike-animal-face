import { SELECT_LEVEL } from "../actions/types";

import levels from "../../resources/level-info";

export default (state = { ...levels.easy }, action) => {
  switch (action.type) {
    case SELECT_LEVEL:
      return action.payload;
    default:
      return state;
  }
};
