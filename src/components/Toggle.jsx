import { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  // const toggle = () => {
  //   setIsOn(!isOn);
  // };

  return (
    <>
    <div
      style={{
        backgroundColor: isOn ? 'green' : 'red',
        color: 'white',
        padding: '40px',
        textAlign: 'center',
       
      }}
    >
      <h1>{isOn ? 'ON' : 'OFF'}</h1>
    <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
    
    </>
  );
}

export default ToggleButton;
