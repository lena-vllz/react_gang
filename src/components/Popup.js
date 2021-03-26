import React, {useState} from 'react';
import Header from './header';
import './header.css';
import '../index.css';
import Moon from './assets/moon.png';
import Sun from './assets/sun.png';
import axios from 'axios';
import Search from '../components/Search';



function Popup({selected, closePopup}) {
    const starFull = "https://img.icons8.com/fluent/452/star-filled.png"
    const starHalf = "https://img.icons8.com/material-outlined/452/star-half.png"
    const starEmpty = "https://www.my-etiquettes.com/wp-content/uploads/2017/10/Bordure-etoile-jaune.svg"
    let state1 = starEmpty
    let state2 = starEmpty
    let state3 = starEmpty
    let state4 = starEmpty
    let state5 = starEmpty
    let table2 = []
    const rate = Math.round((selected.imdbRating/2)*2)/2


    let nbStar = 0
    let tableStar = []

    for (var i = 0; i < rate; i++) {
        nbStar ++
        document.getElementById("test")
        tableStar.push("🟊")
    }

    for(let i = 0.5; i<=5; i+=0.5){
            if(i<=rate){
                table2.push(i)
                console.log(table2)
            }
        }
     if(table2.includes(0.5)){
        state1 = starHalf
        if(table2.includes(1)){
            state1 = starFull
            if(table2.includes(1.5)){
                state2 = starHalf
                if(table2.includes(2)){
                    state2 = starFull
                    if(table2.includes(2.5)){
                        state3 = starHalf
                        if(table2.includes(3)){
                            state3 = starFull
                            if(table2.includes(3.5)){
                                state4 = starHalf
                                if(table2.includes(4)){
                                    state4 = starFull
                                    if(table2.includes(4.5)){
                                        state5 = starHalf
                                        if(table2.includes(5)){
                                            state5 = starFull
                                         }
                                     }
                                 }
                             }
                         }
                     }
                 }

             }
         }
     }



    return (
        <section className="popup">
            <Header/>
            <div className="content">
            {/* <Search handleInput={handleInput} search={search}/>
            <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup= {closePopup} /> : false} */}
                <h2 className="title">{ selected.Title }</h2>
                <p className="rating"> Rating: {rate}/10 </p>
                <p className="rating"> Rating: {tableStar}/5</p>

                <div className="rating">
                    <img src = {state1} alt="rating"></img>
                    <img src = {state2} alt="rating"></img>
                    <img src = {state3} alt="rating"></img>
                    <img src = {state4} alt="rating"></img>
                    <img src = {state5} alt="rating"></img>
                </div>

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
