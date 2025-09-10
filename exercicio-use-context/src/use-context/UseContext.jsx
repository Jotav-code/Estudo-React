import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    const url = `https://ranekapi.origamid.dev/json/api/produto/`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        return setDados(json);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ dados }}>
      {children}
    </GlobalContext.Provider>
  );
};
