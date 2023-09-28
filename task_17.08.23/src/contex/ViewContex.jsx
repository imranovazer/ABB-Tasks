import React, { createContext, useState } from "react";

export const ViewContex = createContext(null);

function ViewContexProvider({ children }) {
  const [view, setView] = useState("cards");

  const switchView = () => {
    setView((prevState) => (prevState === "cards" ? "table" : "cards"));
  };

  return (
    <ViewContex.Provider value={{ switchView, view }}>
      {children}
    </ViewContex.Provider>
  );
}

export default ViewContexProvider;
