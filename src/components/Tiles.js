import React from "react"
import HogTile from "./HogTile"

function Tiles( {hogs} ) {
    return (
        <div className="">
            {hogs.map(hog => <HogTile key={hog.image} hog={hog} /> )}
        </div>
    )
}

export default Tiles;