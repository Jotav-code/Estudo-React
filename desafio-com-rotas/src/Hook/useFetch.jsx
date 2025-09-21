import React from 'react';

const useFetch = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const requere = React.useCallback(async (url) => {
    var response;
    var json;
    try {
      setLoading(true);
      setError(null);
      response = await fetch(url);
      json = await response.json();
    } catch (error) {
      setDados(null);
      setError('error');
    } finally {
      setLoading(false);
      setDados(json);
      return { response, json };
    }
  }, []);
  return { dados, requere, loading, error };
};

export default useFetch;
