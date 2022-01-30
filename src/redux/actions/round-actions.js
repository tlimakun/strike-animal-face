import {
  ACTIVATE_ROUND,
  DEACTIVATE_ROUND,
  SET_TIME_LEFT,
  REDUCE_TIME_LEFT,
  ADD_TIME_LEFT,
} from "./types";

// activate round
export const activateRound = () => (dispatch) => {
  dispatch({ type: ACTIVATE_ROUND });
};

// deactivate round
export const deactivateRound = () => (dispatch) => {
  dispatch({ type: DEACTIVATE_ROUND });
};

// set new round time left by specific number
export const setTimeLeft = (timeLeft) => (dispatch) => {
  dispatch({ type: SET_TIME_LEFT, payload: timeLeft });
};

// reduce round time left by 1
export const reduceTimeLeft = () => (dispatch) => {
  dispatch({ type: REDUCE_TIME_LEFT });
};

// add specific time left to current time left
export const addTimeLeft = (timeLeft) => (dispatch) => {
  dispatch({ type: ADD_TIME_LEFT, payload: timeLeft });
};
