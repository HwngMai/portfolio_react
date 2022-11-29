import { SET_SCROLL } from "../Constant/Location";
import { SET_HEADER } from "../Constant/Location";
const initialState = {
  // khởi tạo thông tin scroll
  scroll: false,
  header: true,
};

export const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCROLL:
      state.scroll = action.payload;
      return { ...state };
    case SET_HEADER:
      state.header = action.payload;
      return { ...state };
    default:
      return state;
  }
};
