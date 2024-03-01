import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogDisplay from "./HogDisplay";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogDisplay hogs={hogs}/>
		</div>
	);
}

export default App;
