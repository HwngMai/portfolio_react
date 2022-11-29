import { SET_SCROLL } from "../Constant/Location";
import { SET_HEADER } from "../Constant/Location";
export const setScroll = (value) => {
  return {
    type: SET_SCROLL,
    payload: value,
  };
};
export const setHeader = (value) => {
  return {
    type: SET_HEADER,
    payload: value,
  };
};
