import { SELECT_LEVEL } from "./types";

// add level that player selected to store
export const selectLevel = (level) => (dispatch) => {
  dispatch({ type: SELECT_LEVEL, payload: level });
};
