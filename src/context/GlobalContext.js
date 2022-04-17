import { createContext } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const URL = "https://api.dyatnas.my.id/api";
  return (
    <GlobalContext.Provider value={URL}>
      {props.children}
    </GlobalContext.Provider>
  );
};
