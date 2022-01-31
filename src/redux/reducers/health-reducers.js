import { SET_HEALTH, REDUCE_HEALTH } from "../actions/types";

export default (state = { healthLeft: 0 }, action) => {
  switch (action.type) {
    case SET_HEALTH:
      return { healthLeft: action.payload };
    case REDUCE_HEALTH:
      return { healthLeft: state.healthLeft - 1 };
    default:
      return state;
  }
};
