import React from 'react';
const set = new Set();

const useFectch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, SetLoading] = React.useState(null);

  const require = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      SetLoading(true);
      response = await fetch(url);
      json = await response.json();
    } catch (error) {
      json = null;
      setError('error');
    } finally {
      setData(json);
      SetLoading(false);
      return { response, json };
    }
  }, []);
  set.add(require);
  console.log(set);
  return { data, setData, require, loading, error };
};
export default useFectch;
