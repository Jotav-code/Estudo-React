import React from 'react';
import Slide from './Slide/Slide';
const slide = [
  {
    texto: 'slide1',
    id: 's1',
  },
  {
    texto: 'slide2',
    id: 's2',
  },
  {
    texto: 'slide3',
    id: 's3',
  },
  {
    texto: 'slide4',
    id: 's4',
  },
];
const App = () => {
  return (
    <div>
      <Slide options={slide} />
    </div>
  );
};

export default App;
