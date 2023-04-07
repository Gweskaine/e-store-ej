import React from 'react';
import './App.css';

function App() {  
  const[results, setResults] = React.useState([]);
  React.useEffect(()=>{
    fetch("http://localhost:3001/categories")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResults(data);
    })

  }, [])

    return (
      <React.Fragment>
      <header>My Store</header>
      <section>
        <nav>
        {
          results.map(d => (
            <div key={d.id}>{d.title}</div>
          ))
        }
        </nav>
        <article>
          main area
        </article>
      </section>
      <footer>
        footer        
      </footer>      
      </React.Fragment>
    );  
}

export default App;
