import { SET_SCROLL } from "../Constant/Location";
const initialState = {
  // khởi tạo thông tin scroll
  scroll: false,
};

export const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCROLL:
      state.scroll = action.payload;
      return { ...state };
    default:
      return state;
  }
};
