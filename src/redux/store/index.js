import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourite";
import jobReducer from "../reducers/job";
//declaring const bigReducer and using combineReducers function.
const bigReducer = combineReducers({
  favourite: favouriteReducer, //since we have already attached "favourite" here, we can delete it from /reducers/favourite.js.
  // I mean this code below, we can freely delete "favourite" line now and it will work the same way, because FAVOURITE/JOB STATEMENTS HERE ARE THE SLICES TOO.
  // const initialValue = {
  //   favourite: {
  //     list: [],
  //   },
  // };
  // if we leave favourite in our structure in favourite.js, we will end up having :
  // const initialValue = {
  //   favourite: {
  //     favourite: {
  //          list: [],
  //    },
  //   },
  // };
  job: jobReducer,
  // the same applies for job too.
}); //after, we have to set bigReducer in our store below.

const store = configureStore({
  reducer: bigReducer,
});
export default store;
