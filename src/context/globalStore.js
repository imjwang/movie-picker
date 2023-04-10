import { createContext, useReducer, useMemo } from "react";

const initialState = {
  loading: false,
  showModal: false,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_MODAL":
      return {
        ...state,
        showModal: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
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
