import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import List from './components/List';
import User from './components/User';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('JSON not found')
        }
        
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false); 
      }
      
    } 
    getData()
  })

  return (
    <>
      {loading && <div style={{ width: '25%', margin: '0 auto' }}>Please wait, the list is loading...</div>}
      {error && <div style={{ width: '25%', margin: '0 auto' }}>{`Error: ${error}`}</div>}
      {data && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List data={data} />} />     
            <Route path="user" element={<User data={data}/>} />  
          </Routes>
        </BrowserRouter>
      )}
    </>    
  )
}

export default App;