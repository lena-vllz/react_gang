import React from 'react'

function Popup({selected, closePopup}) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{ selected.Title }</h2>
                <p className="rating"> Rating: {selected.imdbRating}/10</p>
                <div className="contentFlex">
                    <img class="affiche_film" src={selected.Poster} />
                    <div className="info_content">
                       <p className="director"> Director: {selected.Director}</p>
                        <p className="year">{selected.Year}</p>
                        <p className="author"> Actors: {selected.Actors}</p>
                        <p className="plot">{selected.Plot}</p> 
                    </div>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup