import { BUY_ICECREAM } from './iceCreamTypes.js';

const iceCreamState = {
  numberOfIceCreams: 20,
};

const iceCreamReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numberOfIceCreams: state.numberOfIceCreams - 1 };
    default:
      return state;
  }
};

export default iceCreamReducer;
