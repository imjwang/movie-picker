import { createContext, useReducer, useMemo } from "react";

const initialState = {
  loading: false,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        loading: action.payload,
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
