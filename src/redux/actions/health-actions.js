import { SET_HEALTH, REDUCE_HEALTH } from "./types";

// set specific health
export const setHealth = (health) => (dispatch) => {
  dispatch({ type: SET_HEALTH, payload: health });
};

// reduce health by one until zero
export const reduceHealth = () => (dispatch) => {
  dispatch({ type: REDUCE_HEALTH });
};
