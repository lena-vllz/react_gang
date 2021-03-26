import React from 'react';

// function that returns the elements you want when you do a search
function Result({result, openPopup}) {
    
    {/* if (result.Poster == true){
                <img src={result.Poster}/>
            } else {
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yDB2rWsDM3n8DjnbyiGWVmr0w8CD9voLkH9vla9FiRzI8E3o72JT9lw1LGB96AkYWds&usqp=CAU"}/>
            } */}
    
    return (
        //on click in a result use the openPopup function
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            
            <img src={result.Poster}/>
            <div className="hoover_div">
                <div className="hoover_organise">
                    {/* get the title, the year and the rating of the movie on hover */}
                    <h3 className="hover_title">{result.Title}</h3>
                    <p className="hover_year">{result.Year}</p>
                    <p className="hover_rating">{result.imdbRating}/5</p>
                </div>
            </div>
        </div>
    )
}


export default Result;
