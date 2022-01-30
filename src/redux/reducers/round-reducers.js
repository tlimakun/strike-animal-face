import {
  ACTIVATE_ROUND,
  DEACTIVATE_ROUND,
  SET_TIME_LEFT,
  REDUCE_TIME_LEFT,
  ADD_TIME_LEFT,
} from "../actions/types";

export default (state = { isRoundActive: false, timeLeft: 0 }, action) => {
  switch (action.type) {
    case ACTIVATE_ROUND:
      return { ...state, isRoundActive: true };
    case DEACTIVATE_ROUND:
      return { ...state, isRoundActive: false };
    case SET_TIME_LEFT:
      return { ...state, timeLeft: action.payload };
    case REDUCE_TIME_LEFT:
      return { ...state, timeLeft: state.timeLeft - 1 };
    case ADD_TIME_LEFT:
      return { ...state, timeLeft: state.timeLeft + action.payload };
    default:
      return state;
  }
};
