import React from 'react';
import Button from './Button/Button';
import Details from './Details/Details';

const App = () => {
  const [details, setDetails] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleClick = async (event) => {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    console.log(json);
    setDetails(json);
    setLoading(false);
  };

  return (
    <>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>tablet</button>
      {loading ? <p>carregando...</p> : ''}
      {!loading && details && <Details details={details} />}
      
    </>
  );
};

export default App;
