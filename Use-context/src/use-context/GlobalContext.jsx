import React from 'react';

export const GlobalContext2 = React.createContext();

export const Global = ({ children }) => {
  const [contar, setcontar] = React.useState(0);

  const HandeleClick = React.useCallback(() => {
    setcontar((contar) => contar + 1);
  }, []);
  return (
    <GlobalContext2.Provider value={{ HandeleClick, contar }}>
      {children}
    </GlobalContext2.Provider>
  );
};
