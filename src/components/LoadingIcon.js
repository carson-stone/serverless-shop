import React, { useState, useEffect } from 'react';
import Icon from '../assets/loading-icon.png';
import './LoadingIcon.css';

export default function LoadingIcon() {
  const [classes, setClasses] = useState(['loading-icon', 'rs0']);
  const [rotationStep, setRotationStep] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (classes.length < 9) {
        setClasses([...classes, `rs${rotationStep}`]);
        setRotationStep(rotationStep + 1);
      } else if (classes[classes.length - 1] === 'rs7') {
        setClasses(['loading-icon', 'rs0']);
        setRotationStep(1);
      }
    }, 200);
  }, [rotationStep]);

  return (
    <div className='dimmer'>
      <img
        src={Icon}
        alt='loading icon'
        height='80'
        className={classes.join(' ')}
      />
    </div>
  );
}
