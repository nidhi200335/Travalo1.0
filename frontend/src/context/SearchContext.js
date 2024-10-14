import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};
// SearchReducer: This is a reducer function that takes the current state and an action, and returns a new state based on the action type.
// If the action type is "NEW_SEARCH", it returns the payload of the action, which should be the new search state.
// If the action type is "RESET_SEARCH", it returns the initial state, effectively resetting the search state.
// The default case returns the current state if the action type is not recognized.
export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

//   useReducer Hook:
// This hook takes the reducer function (SearchReducer) and the initial state (INITIAL_STATE) as arguments.
// It returns the current state (state) and a dispatch function (dispatch) to send actions to the reducer.
// Providing State and Dispatch:
// The provider component (SearchContext.Provider) wraps its children, making the state and dispatch function available to any ne
//sted components that need them.
// The value prop of SearchContext.Provider includes the current state properties (city, dates, options) and the dispatch function.
  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};