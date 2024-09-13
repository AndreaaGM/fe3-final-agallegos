import { createContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "./useReduce";
import axios from "axios";

//export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, 
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const llamadoAPI = async () => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        
    
        dispatch({ type: "Data", payload: data });
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    llamadoAPI();
  }, [dispatch]);

return (
  // Añadir las variables (array: tema, data, favs)
  <ContextGlobal.Provider value={{ state, dispatch }}>
    {children}
  </ContextGlobal.Provider>
);
};
