import React from 'react';
import style from './slide.module.css';

const Slide = ({ options }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(active * width));
  }, [active]);

  function nextSlide() {
    if (active < options.length - 1) setActive(active + 1);
  }
  function prevSlide() {
    if (active > 0) setActive(active - 1);
  }

  return (
    <section className={style.container}>
      <div ref={contentRef} className={style.content}>
        {options.map((slide) => {
          return (
            <div
              className={style.item}
              style={{ transform: `translateX(${position}px)` }}
              key={slide.id}
            >
              <h1>{slide.texto}</h1>
            </div>
          );
        })}
      </div>
      <nav className={style.nav}>
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </nav>
    </section>
  );
};

export default Slide;
