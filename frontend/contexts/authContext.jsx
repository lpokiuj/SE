import { createContext, useReducer, useContext } from "react";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: localStorage.getItem("user") || null,
  token: localStorage.getItem("token") || null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUser = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUser must be used within a AuthProvider");
  }
  return context;
};
