import React from "react"

const Search = (props) => {

    return (
        <div className="searchDiv hidden">
            <input type="text" className="search" value={props.inputValue} placeholder="search Users" onChange={props.onSearch} />
        </div>
    )

}

export default Search;