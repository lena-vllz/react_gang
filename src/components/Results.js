import React, { Component } from 'react';
import Result from './Result';

function Results ({results, openPopup}) {
    return ( 
        <React.Fragment>
        <section className="results">
            {results && results.map(result =>(
                <Result key={result.imdbID} result={result} openPopup={openPopup}/>
            ))}
        </section>
        </React.Fragment>
     );
}
 
export default Results;