import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#000000');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div >
      <h2>Color Picker</h2>
      <input
        type="color"
        aria-label="Color Picker"
        value={color}
        onChange={handleChange}
      />
      <div
        role="region"
        aria-label="Color Preview"
        style={{
          marginTop: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: color,
        }}
      ></div>
      <p>Color Hash Code : {color}</p>
    </div>
  );
}
