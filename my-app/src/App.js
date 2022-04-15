import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [ items, setItems] = useState([])
  const [ visible, setVisible] = useState(6)

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(resp => resp.json())
    .then (data => setItems(() => data))

  },[])

  function handleLoadMore(){
    setVisible(()=> visible + 3)
  }

  return (
    <div className="App">
      <div className="container">
        {items.slice(0,visible).map((item, index) =>
        <div className="card">
          <div className="id">
            <span>{index + 1}</span>
          </div>
          <p>{item.body}</p>
        </div>
          )}
        <button onClick={handleLoadMore}>
          Load More
        </button>
      </div>
      
      
    </div>
  );
}

export default App;
