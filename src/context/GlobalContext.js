import { createContext } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const URL = "http://localhost:8000/api";
  return (
    <GlobalContext.Provider value={{ URL }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
