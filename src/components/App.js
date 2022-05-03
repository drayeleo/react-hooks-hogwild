import React, { useState } from "react";
import Nav from "./Nav";
import Tiles from "./Tiles"
import SearchTools from "./SearchTools"

import hogs from "../porkers_data";

function App() {
	const [filterByGrease, setFilterByGrease] = useState(false);
	const [sortBy, setSortBy] = useState("none")

	function handleGreaseFilter() {
		setFilterByGrease(() => !filterByGrease);
	}

	function handleSort(newSortState) {
		setSortBy(newSortState);
	}

	let hogsToDisplay = hogs.filter(hog => filterByGrease ? hog.greased : true)

	if(sortBy === "name") {
		hogsToDisplay = hogsToDisplay.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name));
	} else if (sortBy === "weight") {
		hogsToDisplay = hogsToDisplay.sort((hog1, hog2) => hog1.weight - hog2.weight);
	}

	return (
		<div className="App">
			<Nav />
			<SearchTools handleGreaseFilter={handleGreaseFilter} handleSort={handleSort} filterByGrease={filterByGrease} />
			<Tiles hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
