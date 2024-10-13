/* Create a custom React hook, usePrevious, that keeps track of the previous 
value of a state variable.
*/ 

import { useState, useRef, useEffect } from 'react';

// Custom hook to track the previous value
const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const UsePromise = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
        <h1>usePrevious Hook</h1>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {previousCount}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
export default UsePromise;