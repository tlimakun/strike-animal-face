import {
  ADD_TOTAL_COIN,
  REDUCE_TOTAL_COIN,
  SET_BEST_COIN,
  ADD_COIN,
  RESET_COIN,
} from "../actions/types";

// add obtained coin after game over to total coin
export const addTotalCoin = (coin) => (dispatch) => {
  dispatch({ type: ADD_TOTAL_COIN, payload: coin });
};

// reduce total coin after purchase an animal face in shop
export const reduceTotalCoin = (coin) => (dispatch) => {
  dispatch({ type: REDUCE_TOTAL_COIN, payload: coin });
};

// set new best obtained coin after game over
export const setBestCoin = (coin) => (dispatch) => {
  dispatch({ type: SET_BEST_COIN, payload: coin });
};

// add coin obtained in current round
export const addCoin = (coin) => (dispatch) => {
  dispatch({ type: ADD_COIN, payload: coin });
};

// reset coin when start new round
export const resetCoin = () => (dispatch) => {
  dispatch({ type: RESET_COIN });
};
