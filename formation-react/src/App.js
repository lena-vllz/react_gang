import React, {useState} from 'react';
import axios from 'axios';
import Search from './components/Search'
import Results from './components/Results'

function App() {
  const [state, setState] = useState({
    s:"",
    results: [],
    selected : {}
  });
  
  const apiurl = "https://api.themoviedb.org/3/movie/550?api_key=f835613c6249d4cef6b0b9227f94b871"

  const search = (e) => {
    if (e.key === "Enter"){
      axios(apiurl + "&s=" + state.s).then(({data})=>{
        let results = data.Search;

        setState(prevState => {
           return { ...prevState, results: results }
        })
      });
    }
  }
  const handleInput = (e) =>{
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    });

    
  }

  return (
    <div className="App">
      <header>
        <h1>Flick</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
