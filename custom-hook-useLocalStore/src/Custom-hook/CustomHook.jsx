import React from 'react';

const useLocalSotore = (key, incial) => {
  const [state, setState] = React.useState(() => {
    var local = window.localStorage.getItem(key);
    return local ? local : incial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalSotore;
