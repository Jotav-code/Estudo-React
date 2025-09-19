import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.titulo;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', props.descricao);

    console.log(props);
  });
  return <></>;
};

export default Head;
