// to get rid of strings in  types-cases ("case "ADD_TO_FAVOURITE":"), we have created this file.
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_COMPANYS = "GET_COMPANYS";
//
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
//

//since we call add/remove dispatches from muliple places, it would be ideal to create specific functions here and delete the boilerplate code from there.
// functions like these in Redux are named: Action Creators.
export const AddToFavouriteAction = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company,
});

export const removeFromFavouriteAction = (company) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: company,
});
// prop company is used there like that: onClick={() => dispatch(removeFromCartAction(data.company_name))}, where data.company_name = company prop.

export const getCompanysAction = (query) => {
  //an action returning a function
  return async (dispatch, getState) => {
    //the beauty of it is that it can be ASYNC.
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        // setJobs(data); this would only work inside a component
        console.log(data);
        dispatch({
          type: GET_COMPANYS,
          payload: data, // all our fetched companys
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
