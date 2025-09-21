import React from 'react';

const Header = () => {
  console.log('renderizou')
  return <header>Header</header>;
};

export default React.memo(Header);
