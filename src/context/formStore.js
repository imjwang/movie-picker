import { createContext, useReducer, useMemo } from "react";

const initialState = {};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "RESET_DATA":
      return initialState;
    case "EDIT_DATA":
      return { ...state, [action.payload.name]: action.payload.data };
    default:
      return state;
  }
};

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
