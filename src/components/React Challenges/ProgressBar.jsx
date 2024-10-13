/* eslint-disable react/prop-types */
import { useState } from 'react';

const Progressbar = ({ percentage }) => {
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.filler,
          width: `${percentage}%`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        {`${percentage}%`}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '30px',
    width: '100%',
    backgroundColor: '#e0e0df',
    borderRadius: '50px',
    overflow: 'hidden',
  },
  filler: {
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 'inherit',
    transition: 'width 0.2s ease-in',
  },
};

// Start here...
const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPercentage(Math.min(100, Math.max(0, value))); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Progress Bar Example</h1>
      <input
        type="number"
        value={percentage}
        onChange={handleInputChange}
        placeholder="Enter percentage"
        style={{ marginBottom: '20px', padding: '5px' }}
      />
      <Progressbar percentage={percentage} />
    </div>
  );
};

export default ProgressBar;
