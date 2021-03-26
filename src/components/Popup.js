import React from 'react';
import Header from './header';

function Popup({selected, closePopup}) {

    for (var i = 0; i < Math.round(selected.imdbRating/2); i++) {
        console.log("🟊");
        document.getElementById("test")
        document.images.src= "https://lh3.googleusercontent.com/proxy/FBeOdPupu3vhu9EyDFnEpYJRqVW_lJ7OjIkycLVmlEwgQyP4FDk6tVLiepHq7iKmQYzC9_pwcyYsEfD1dChqbBM1rA2hhDDY"
    }

    return (
        <section className="popup">
            <Header/>
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
            <button className="close" onClick={closePopup}>Close</button>
        </div>
    </section>
    )
};


export default Popup
