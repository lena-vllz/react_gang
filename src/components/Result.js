import React from 'react';

// function that returns the elements you want when you do a search
function Result({result, openPopup}) {
    return (
        //on click in a result use the openPopup function
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster}/>
            <div className="hoover_div">
                <div className="hoover_organise">
                    {/* get the title, the year and the rating of the movie */}
                    <h3 className="hover_title">{result.Title}</h3>
                    <p className="hover_year">{result.Year}</p>
                    <p className="hover_rating">{result.imdbRating}/10</p>
                </div>
            </div>
        </div>
    )
}


export default Result;
