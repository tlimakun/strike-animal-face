import {
  ADD_TOTAL_COIN,
  REDUCE_TOTAL_COIN,
  SET_BEST_COIN,
  ADD_COIN,
  RESET_COIN,
} from "../actions/types";

export default (state = { coin: 0, bestCoin: 0, totalCoin: 0 }, action) => {
  switch (action.type) {
    case ADD_TOTAL_COIN:
      return { ...state, totalCoin: state.totalCoin + action.payload };
    case REDUCE_TOTAL_COIN:
      return { ...state, totalCoin: state.totalCoin - action.payload };
    case SET_BEST_COIN:
      return { ...state, bestCoin: state.bestCoin + action.payload };
    case ADD_COIN:
      return { ...state, coin: state.coin + action.payload };
    case RESET_COIN:
      return { ...state, coin: 0 };
    default:
      return state;
  }
};
