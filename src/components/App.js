import React, {useState} from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";

import hogs from "../porkers_data";

function App() {
	//const [hogs, setHogs] = useState([])
	// hogs.map((hog, idx) => {
		// <hogTile key={idx} name={hog.name} image={hog.image} />  
	//})

//console.log(setHogs)


	return (
		<div className="App">
			<main>{
			hogs.map((hog, idx) => {
		 <HogTile key={idx} name={hog.name} image={hog.image} />  
	})
}		</main>
			<Nav  />
		</div>
	);
}

export default App;
