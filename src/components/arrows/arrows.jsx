import React, { useEffect, useState } from 'react';
import styles from './arrows.module.scss';

function Arrows() {
  const moveUp = () =>  window.scrollTo(window.scrollX, 0);
  const moveDown = () => {
    const maxDown = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(window.scrollX, maxDown);
  };

  const [ isHidden, setHidden ] = useState({topArrow: true, bottomArrow: false});

  const hide = () => {
    const minOffset = 0;
    const maxOffset = document.documentElement.scrollHeight - window.innerHeight;
    const nowOffset = window.scrollY;
    const indentTop = 400;
    const indentBottom = 150;
    if (nowOffset < minOffset + indentTop) setHidden({topArrow: true, bottomArrow: false});
    if (nowOffset > maxOffset - indentBottom) setHidden({topArrow: false, bottomArrow: true});
    if (nowOffset > minOffset + indentTop && nowOffset < maxOffset - indentBottom) {
      setHidden({topArrow: false, bottomArrow: false});
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', hide);
  }, [])

  return (
    <>
      <div className={styles.arrowTop} onClick={moveUp} hidden={isHidden.topArrow}/>
      <div className={styles.arrowBottom} onClick={moveDown} hidden={isHidden.bottomArrow}/>
    </>
  )
}

export default Arrows;