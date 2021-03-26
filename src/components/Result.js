import React from 'react';

function Result({result, openPopup}) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img className="poster" src={result.Poster}/>
            {/* <h3 className="hoverTitle">{result.Title}</h3> */}
        </div>
    )
}


export default Result;
