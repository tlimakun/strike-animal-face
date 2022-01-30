import { SELECT_LEVEL } from "./types";

export const selectLevel = () => (dispatch) => {
  dispatch({ type: SELECT_LEVEL, payload: level });
};
