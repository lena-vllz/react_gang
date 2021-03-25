import React, {useState} from 'react';
import axios from 'axios';

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
const apiurl = "https://api.themoviedb.org/3/search/movie?api_key=f835613c6249d4cef6b0b9227f94b871"

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected : {}
  });
  
  
  
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&query=" + state.s).then(({data})=>{
        setState(prevState => {
            let results = data.Search;
           return { ...prevState, results: data.results } 
        });
      })
    }
  } 
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s}
    });
 
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({data})=>{
      let result = data;

      setState(prevState => {
        return {...prevState, selected: result}
      });
    });

  }

  const closePopup = () => {
    setState(prevState =>{
      return{...prevState, selected:{}}
    });
  }


  return (
    <div className="App">
      <header>
        <h1>Flick</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup= {closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
