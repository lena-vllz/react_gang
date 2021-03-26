import React, {useState} from 'react';
import Header from './header';
import './header.css';
import '../index.css';
import Moon from './assets/moon.png';
import Sun from './assets/sun.png';
import axios from 'axios';
import Search from '../components/Search';

function Popup({selected, closePopup}) {

    for (var i = 0; i < Math.round(selected.imdbRating/2); i++) {
        console.log("🟊");
        document.getElementById("test")
        document.images.src= "https://lh3.googleusercontent.com/proxy/FBeOdPupu3vhu9EyDFnEpYJRqVW_lJ7OjIkycLVmlEwgQyP4FDk6tVLiepHq7iKmQYzC9_pwcyYsEfD1dChqbBM1rA2hhDDY"
    }


//     const [state, setState] = useState({
//         s: "",
//         results: [],
//         selected : {}
//       });
      
//     const apiurl = "http://www.omdbapi.com/?apikey=8774b09f"


//   const search = (e) => {
//     if (e.key === "Enter") {
//       axios(apiurl + "&s=" + state.s).then(({data})=>{
//         let results = data.Search;

//         setState(prevState => {
//            return { ...prevState, results: results }
//         })
//       });
//     }
//   }

//   const handleInput = (e) => {
//     let s = e.target.value;

//     setState(prevState => {
//       return { ...prevState, s: s}
//     });
//   }

//   const openPopup = id => {
//     console.log(id)
//     axios(apiurl + "&i=" + id).then(({data})=>{
//       let result = data;

//       setState(prevState => {
//         return {...prevState, selected: result}
//       });
//     });
//   }

//   const closePopup = () => {
//     setState(prevState =>{
//       return{...prevState, selected:{}}
//     });
//   }



    return (
        <section className="popup">
            <Header/>
            <div className="content">
            {/* <Search handleInput={handleInput} search={search}/>
            <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup= {closePopup} /> : false} */}
                <h2 className="title">{ selected.Title }</h2>
                <p className="rating"> Rating: {selected.imdbRating}/10</p>
                <div className="contentFlex">
                    <img class="affiche_film" src={selected.Poster} />
                    <div className="info_content">
                       <p className="director"> Director: {selected.Director}</p>
                        <p className="year">Released on {selected.Year}</p>
                        <p className="author"> Actors: {selected.Actors}</p>
                        <p className="plot">{selected.Plot}</p>
                    </div>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
};


export default Popup