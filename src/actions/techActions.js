import { GET_TECHS, TECHS_ERROR, SET_LOADING, ADD_TECH } from "./types";

// get Tech from the server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};

// Add Tech to the server
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
