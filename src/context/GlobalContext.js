import { createContext, useState } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [collapse, setCollapse] = useState(false);
  const URL_IMAGE = "https://api.dyatnas.my.id";
  const URL = "https://api.dyatnas.my.id/api";
  return (
    <GlobalContext.Provider value={{ URL, URL_IMAGE, collapse, setCollapse }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
