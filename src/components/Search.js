import React from 'react'

// function who manage the search bar
function Search({handleInput, search}) {
    return (
        <section className="searchbox-wrap">
            <input 
                type="text" 
                placeholder="Search a movie..." 
                className ="searchbox" 
                onChange= {handleInput}
                onKeyPress={search}
            />
        </section>
    )
}

export default Search;
