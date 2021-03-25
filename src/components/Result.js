import React from 'react'

function Result({result, openPopup}) {
    return (
        <React.Fragment>
        <div className="result" onClick={() => openPopup(result.id)}>
            <img src={"https://image.tmdb.org/t/p/w500/" + result.poster_path} alt="poster"/>
            <h3>{result.original_title}</h3>
        </div>
        </React.Fragment>
    )
}

export default Result;
