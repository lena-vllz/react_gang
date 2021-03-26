import React from 'react';


function Result({result, openPopup}) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster}/>
            <div className="hoover_div">
                <div className="hoover_organise">
                    <h3 className="hover_title">{result.Title}</h3>
                    <p className="hover_year">{result.Year}</p>
                    <p className="hover_rating">{result.imdbRating}/10</p>
                </div>
            </div>
        </div>
    )
}


export default Result;
