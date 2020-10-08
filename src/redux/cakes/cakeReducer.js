import { BUY_CAKE } from './cakeTypes';

const cakeState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - action.payload };
    default:
      return state;
  }
};

export default cakeReducer;
