import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer, Navbar } from "./Components";
import {
	Auth,
	Dashboard,
	Landing,
	SnippetDetails,
	SnippetEditor,
} from "./Pages";

function App() {
	return (
		<div className="w-full h-full bg-primary text-secondary font-raleway">
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/snippet" element={<SnippetDetails />} />
				<Route path="/editor" element={<SnippetEditor />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
