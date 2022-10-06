import React, {useState} from 'react';
import Led from './Led';

export const Menu = () => {
  const [toggle, settoggle] = useState(false);
  const toggleLed = () => {
    settoggle(!toggle);
  };
  return (
    <div className='menu'>
      <h1>Random Number </h1>
      <h2> (1 - 100)</h2>
      <button onClick={toggleLed}>Toggle Led</button>
      {toggle == true ? <Led /> : null}
    </div>
  );
};
