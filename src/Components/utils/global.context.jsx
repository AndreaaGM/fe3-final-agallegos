import { createContext, useReducer } from "react";
import { reducer, initialState } from "./useReduce";

//export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
