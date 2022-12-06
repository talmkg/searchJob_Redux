const initialValue = {
  favourite: {
    list: [],
  },
};
const mainReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        //now we have to return an initial value to start from something.
        ...state, //making copy of what we already have
        // now we can start over-riting existing ones
        favourite: {
          ...state.favourite, //copying again, just if we will add more element later to the initial value, not only list[].
          list: [...state.favourite.list, action.payload],
        },
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favourite: {
          ...state.favourite, //we CAN NOT USE MUTATABLE WAYS. (help -> website doesitmutate)
          list: state.favourite.list.filter((fav) => fav !== action.payload), //keep in the array everything except of one i click on
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
