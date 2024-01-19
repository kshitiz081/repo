import React from 'react'

function Search({filterText, changeFilterText}) {
  return (
        <input type="text" placeholder='Search' value={filterText} onChange={(e)=>changeFilterText(e.target.value)}/>
    )
}

export default Search