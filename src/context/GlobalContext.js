import { createContext } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const URL = "http://localhost:8000/api";
  const URL_IMAGE = "http://localhost:8000";
  return (
    <GlobalContext.Provider value={{ URL, URL_IMAGE }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
