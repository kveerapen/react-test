import { INTERVIEWING } from "./constants";

export const changeStatusToInterviewing = payload => {
  return { type: INTERVIEWING, payload };
};

export const getData = () => {
  return dispatch => {
    return fetch("https://randomuser.me/api/?nat=gb&results=5")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
};
