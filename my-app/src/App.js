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
    <div className="container">
      <div className="card-list">
        {items.slice(0,visible).map((item, index) =>
        <div className="card">
          <span>{index + 1}</span>
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
