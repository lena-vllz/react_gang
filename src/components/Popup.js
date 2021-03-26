import React, { useEffect } from 'react';
import Header from './header';
import './header.css';
import '../index.css';
/* importing the stars as .svg */
import starEmpty from './assets/starEmpty.svg';
import starFull from './assets/starFull.svg';
import starHalf from './assets/starHalf.svg';

/* creating the Popup fonction */
function Popup({selected, closePopup}) {
    let state1 = starEmpty
    let state2 = starEmpty
    let state3 = starEmpty
    let state4 = starEmpty
    let state5 = starEmpty
    let table2 = []
    /* Having the imbd Rating and rounding it on /5 */
    const rate = Math.round((selected.imdbRating/2)*2)/2

    /* pushing the stars with the for element, each (selected.imdbRating/2)*2)/2 and half stars */
    for(let i = 0.5; i<=5; i+=0.5){
            if(i<=rate){
                table2.push(i)
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
                <h2 className="title">{ selected.Title }</h2>
                {/* <p className="rating"> Rating: {tableStar}/5</p> */}

                {/* showing the stat of the star half or full */}
                <div className="rating"> Rating
                    <div className="stars">
                        <img src = {state1} alt="rating"></img>
                        <img src = {state2} alt="rating"></img>
                        <img src = {state3} alt="rating"></img>
                        <img src = {state4} alt="rating"></img>
                        <img src = {state5} alt="rating"></img>
                    </div>
                </div>
        	    {/* showing the poster, plot, year, author, director of the film */}
                <div className="contentFlex">
                    <img class="affiche_film" src={selected.Poster} />
                    <div className="info_content">
                       <p className="director"> Director: {selected.Director}</p>
                        <p className="year">Released on {selected.Year}</p>
                        <p className="author"> Actors: {selected.Actors}</p>
                        <p className="plot">{selected.Plot}</p>
                    </div>
                </div>
                {/* creation of a button to go out of the popup box and onClick close it*/}
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
};


export default Popup
