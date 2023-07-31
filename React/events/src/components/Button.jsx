import { useState } from 'react';

export default function Button() {
  const [jsonData, setJsonData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch  ('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Obtain JSON</button>
      {jsonData && (
        <pre>
          {JSON.stringify(jsonData, null, 2)}
        </pre>
      )}
    </div>
  );
};
