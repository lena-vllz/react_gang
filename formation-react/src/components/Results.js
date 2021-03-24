import React from 'react'
import Result from './Result'

function Results({ results }) {
    return (
        <section className="results">
            {results.map(result => (
                <Results result={result} />
            ))}
        </section>
    )
}

export default Results
