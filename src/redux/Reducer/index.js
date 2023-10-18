import { ADD_TO_BASKET, ADD_TO_MINUS, GET_PRODUCT } from "../ActionTypes";

const initialState = {
  product: [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorite: [],
  money: 0,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, product: action.payload };
    case ADD_TO_BASKET:
      const fountProduct1 = state.basket.find(
        (el) => el.id === action.payload.id
      );
      if (fountProduct1) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === fountProduct1.id ? { ...el, count: el.count + 1 } : el
          ),
        };
      }

    case ADD_TO_MINUS:
      const fount = state.basket.find((el) => el.id === action.payload.id);
      if (fount) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === fount.id
              ? { ...el, count: el.count !== 1 ? el.count - 1 : el.count }
              : el
          ),
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, count: 1 }],
      };
    default:
      return state;
  }
};
