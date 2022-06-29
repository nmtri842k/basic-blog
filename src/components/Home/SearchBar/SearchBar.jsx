import React from 'react'
import './search-bar.css'

const SearchBar = ({ value, handleSearchKey, clearSearchKey, formSubmit }) => {
    return (
        <div className='search-bar-wrap'>
            <form action="" onSubmit={formSubmit}>
                <input type="text" placeholder='Go to search' value={value} onChange={handleSearchKey}
                />
                {value && <span onClick={clearSearchKey}>X</span>}
                <button onClick={formSubmit}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar