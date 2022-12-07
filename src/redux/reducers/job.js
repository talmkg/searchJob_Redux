import { GET_COMPANYS } from "../actions";

const initialValue = {
  result: [],
};
const jobReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_COMPANYS:
      return {
        ...state,
        result: action.payload, //now, every time we fetch, our Data (fetched companys) will be saved in result: [] (initialValue);
      };
    default:
      return state;
  }
};
export default jobReducer;
