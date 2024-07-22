import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  // The AuthContextProvider is a React component that 
  // uses the useReducer hook to manage the 
  // authentication state based on the AuthReducer function.
  // useReducer initializes the state with INITIAL_STATE and
  //  returns the current state and 
  // the dispatch function to send actions to the reducer.
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// How It Works
// Initialization: When the application initializes, AuthContextProvider sets up the authentication state using useReducer. The initial state includes any user data stored in localStorage.

// State Management: The AuthReducer function manages changes to the authentication state based on dispatched actions (e.g., login start, login success, login failure, and logout).

// Local Storage: The useEffect hook ensures that any changes to the user state are reflected in localStorage, allowing the user session to persist across page reloads.

// Logout Functionality: The logout function dispatches a LOGOUT action, which clears the user from the state and localStorage.

// Context Provider: The AuthContext.Provider component makes the authentication state and functions available to any component that consumes the AuthContext.

// By using this setup, any component within the AuthContextProvider can access the authentication state and dispatch actions to update it, allowing for a consistent and centralized authentication system.