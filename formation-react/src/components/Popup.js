import React from 'react'

function Popup({selected, closePopup}) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{ selected.title } <span>({selected.year})</span></h2>
                <p className="rating"> Rating: {selected.imdbRating}</p>
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