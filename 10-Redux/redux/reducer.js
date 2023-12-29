import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    case REMOVE_FROM_CART:
      state = state.filter((item) => item.id != action.data.id);
      return state;

    default:
      return state;
  }
};
