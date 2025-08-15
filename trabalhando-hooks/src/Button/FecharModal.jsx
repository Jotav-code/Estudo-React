import React from 'react';

const FecharModal = ({ modal, setModal }) => {
  if (modal)
    return (
      <div>
        Isso é um modal
        <button onClick={() => setModal(false)}>Fechar Modal</button>
      </div>
    );
  return null;
};

export default FecharModal;
