import React, {Component, useState} from 'react';
import axios from 'axios';

import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';
import Header from './components/header';
import Footer from './components/footer';
import Result from './components/Result';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected : {}
  });

  const apiurl = "http://www.omdbapi.com/?apikey=8774b09f"


  const search = (e) => {
    //if (event)
    //to update the search bar all the time
    //but error message
    //when you press enter it updates the search
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
    console.log(id)
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
      <Header/>
      <div className="base"></div>
      <main>
        <p className="slogan">Welcome to Flick! Find now
your movie for tonight</p>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup= {closePopup} /> : false}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
