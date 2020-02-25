import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [name, setName] = useState("William");
    const [lastName, setLastName] = useState("Mars");
    const [kind, setKind] = useState("Monsieur");
  
    return (
      <UserContext.Provider
        value={{
          name,
          lastName,
          kind,
          setName,
          setLastName,
          setKind
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };