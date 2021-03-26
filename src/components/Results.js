import React, { Component } from 'react';
import Result from './Result';

/* props with results and Popup */
function Results ({results, openPopup}) {
    return ( 
        <React.Fragment>
           {/*  Creating a sub component to use Result */}
        <section className="results">
            {results && results.map(result =>(
                /* The key = imdbID, openPopup is her to create the popUp */
                <Result key={result.imdbID} result={result} openPopup={openPopup}/>
            ))}
        </section>
        </React.Fragment>
     );
}
 
export default Results;