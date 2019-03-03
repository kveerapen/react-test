import { INTERVIEWING, DATA_LOADED } from "./constants";

const initialState = {};

const rootReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INTERVIEWING:
      return {
        ...state,
        crewman: {
          stage: action.payload.stage
        }
      };

    case DATA_LOADED: {
      return {
        ...state,
        crewman: action.payload.results.map(person => ({
          id: person.login.uuid,
          name: `${person.name.first} ${person.name.last}`,
          city: person.location.city,
          avatar: person.picture.medium,
          stage: "applied"
        }))
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
