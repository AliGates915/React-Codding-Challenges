import { useState, useEffect } from 'react';

// Custom hook to fetch data from an API
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setData(data);
            } catch (error) {
              setError(error);
            } finally {
              setLoading(false);
            }
          };
          fetchData();
        }, [url]);  
    return { data, loading, error };
};
const App = () => {
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users/1');

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error &&   <p>Error: {error.message}</p>}
      {data &&    <li>{JSON.stringify(data)}</li>}
    </div>
  );
};

export default App;
