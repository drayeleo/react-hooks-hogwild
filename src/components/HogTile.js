import React from "react"
import { useState } from "react";

function HogTile({ hog }) {
    const [displayDetails, setDisplayDetails] = useState(false)

    function handleHogTileClick() {
        setDisplayDetails(() => !displayDetails)
    }

    return (
        <div className="" onClick={handleHogTileClick} >
            <h3>{hog.name}</h3>
            <div>
                <img src={hog.image} alt={hog.name} />
            </div>
            {displayDetails ?
                <>
                    <p>Specialty: {hog.specialty}</p>
                    <p>Greased? {hog.greased ? "Yes" : "No"}</p>
                    <p>Weight: {hog.weight}</p>
                    <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                </> : null}
        </div>
    )
}

export default HogTile;