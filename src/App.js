import React, {useState} from 'react';
import axios from 'axios';

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Header from './components/header'
import { toggle } from './components/toggle';
=======
const apiurl = "https://api.themoviedb.org/3/search/movie?api_key=f835613c6249d4cef6b0b9227f94b871"
>>>>>>> ed147dcf8953e6c6434c144893d72d4d5fc1e9fb
>>>>>>> 3efe4c07f0691a5353f17d4a5a564488f4e34b8f

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected : {}
  });
  
  const apiurl = "http://www.omdbapi.com/?apikey=8774b09f"

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({data})=>{
        let results = data.Search;

        setState(prevState => {
           return { ...prevState, results: results }
        })
      });
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
<<<<<<< HEAD
=======
      <Header/>
      <header>
>>>>>>> 3efe4c07f0691a5353f17d4a5a564488f4e34b8f
        <h1>Flick</h1>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup= {closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
