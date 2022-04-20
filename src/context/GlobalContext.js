import { createContext, useState } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [collapse, setCollapse] = useState(false);
  const URL = "https://api.dyatnas.my.id/api";
  const URL_IMAGE = "https://api.dyatnas.my.id";
  return (
    <GlobalContext.Provider value={{ URL, URL_IMAGE, collapse, setCollapse }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
