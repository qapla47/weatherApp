import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER: 
      // NEVER directly manipulate state, create a new array to manage it
      return [ action.payload.data, ...state ]; // rather than using a concat method, can use the spread operator
  }
  return state;
}