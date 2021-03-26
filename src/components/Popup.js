import React from 'react';
import Header from './header';

function Popup({selected, closePopup}) {
    return (
        <section className="popup">
            <Header/>
            <div className="content">
                <h2>{ selected.Title } <span>({selected.Year})</span></h2>
                <p className="rating"> Rating: {selected.imdbRating}/10</p>
                <p className="author"> Actors: {selected.Actors}</p>
                <div className="plot">
                    <img src={selected.Poster} />
                    <p>{selected.Plot}</p>
                </div>
                <button clasName="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup