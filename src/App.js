import React, {Component, useState} from 'react';
import axios from 'axios';

import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';
import Header from './components/header';
import Footer from './components/footer';
import Result from './components/Result';

function App() {
//creation of the array for the elements
  const [state, setState] = useState({
    s: "",
    results: [],
    selected : {}
  });

  //key for the api
  const apiurl = "http://www.omdbapi.com/?apikey=8774b09f"


  const search = (e) => {
    //if (e)
    //to update the search bar all the time
    //but error message
    //when you press enter it updates the search
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({data})=>{
        //take the elements from the Search document
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
 //open the movie information page
  const openPopup = id => {
    console.log(id)
     //use libray axios  and the api for get the elements in the popup page
    axios(apiurl + "&i=" + id).then(({data})=>{
      let result = data;

      setState(prevState => {
        return {...prevState, selected: result}
      });
    });
  }
  //close the movie page, and go back in the main page
  const closePopup = () => {
    setState(prevState =>{
      return{...prevState, selected:{}}
    });
  }

  

  return (
    <div className="App">
      {/* import header */}
      <Header/>
      <div className="base"></div>
      <main>
  {/* add the elements on the main page */}
        <p className="slogan">Welcome to Flick! Find now
your movie for tonight</p>
  {/* search bar */}
        <Search handleInput={handleInput} search={search}/>
  {/* to open the film page */}
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup= {closePopup} /> : false}
      </main>
        {/* import footer */}
      <Footer/>
    </div>
  );
}

export default App;
