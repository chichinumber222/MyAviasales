import React, { useEffect, useState } from 'react';
import styles from './arrows.module.scss';

function Arrows() {
  const moveUp = () => window.scrollTo(window.scrollX, 0);
  const moveDown = () => {
    const maxDown = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(window.scrollX, maxDown);
  };

  const [isHidden, setHidden] = useState({ topArrow: true, bottomArrow: false });

  const hide = () => {
    const minOffset = 0;
    const maxOffset = document.documentElement.scrollHeight - window.innerHeight;
    const nowOffset = window.scrollY;
    const indentTop = 400;
    const indentBottom = 150;

    switch (true) {
      case maxOffset < indentTop + indentBottom:
        setHidden({ topArrow: true, bottomArrow: true });
        break;
      case nowOffset < minOffset + indentTop:
        setHidden({ topArrow: true, bottomArrow: false });
        break;
      case nowOffset > maxOffset - indentBottom:
        setHidden({ topArrow: false, bottomArrow: true });
        break;
      default:
        setHidden({ topArrow: false, bottomArrow: false });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', hide);
  }, []);

  return (
    <>
      <div
        className={styles.arrowTop}
        onClick={moveUp}
        onKeyDown={moveUp}
        hidden={isHidden.topArrow}
        role="button"
        tabIndex="0"
        aria-label="scroll up"
      />
      <div
        className={styles.arrowBottom}
        onClick={moveDown}
        onKeyDown={moveDown}
        hidden={isHidden.bottomArrow}
        role="button"
        tabIndex="0"
        aria-label="scroll bottom"
      />
    </>
  );
}

export default Arrows;
