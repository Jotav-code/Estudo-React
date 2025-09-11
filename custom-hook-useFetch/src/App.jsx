import React from 'react';
import useFectch from './CustomHook/useFetch';
const App = () => {
  const { require, data, loading, error } = useFectch();
  React.useEffect(() => {
    async function request() {
      const { response, json } =
        await require('https://ranekapi.origamid.dev/json/api/produto/');
      console.log(response);
    }
    console.log(data);

    request();
  }, [require]);
  if (error) return <p></p>;
  if (loading) return <p>carregando...</p>;
  if (data)
    return (
      <>
        {data &&
          data.map((datas) => {
            return <li key={datas.id}>{datas.nome}</li>;
          })}
      </>
    );
  else return null;
};

export default App;
