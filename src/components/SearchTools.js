import React from "react"

function SearchTools( {handleGreaseFilter, handleSort, filterByGrease} ) {
    
    function handleClick(event) {
        //console.log(event.target.value)
        handleSort(event.target.value);
    }
    
    return (
        <div className="">
            <button onClick={handleGreaseFilter} > {filterByGrease ? "Clear Grease Filter" : "Filter By Grease"}</button>
            <button onClick={handleClick} value="name" >Sort by Name</button>
            <button onClick={handleClick} value="weight" >Sort by Weight</button>
            <button onClick={handleClick} value="none" >Clear Sort</button>
        </div>
    )
}

export default SearchTools;