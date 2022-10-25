import { SET_SCROLL } from "../Constant/Location";

export const setScroll = (value) => {
  return {
    type: SET_SCROLL,
    payload: value,
  };
};
