import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Footer, Navbar } from "./Components"; // Importing reusable components
import {
	Auth,
	Dashboard,
	Landing,
	SnippetDetails,
	SnippetEditor,
} from "./Pages"; // Importing page components
import { PrivateRoute, PublicRoute } from "./Security"; // Importing route guards
import { Context } from "./Contexts/Context"; // Importing context for global state

function App() {
	const { user } = useContext(Context); // Accessing the user from context

	return (
		<div className="w-full h-full bg-primary text-secondary font-raleway">
			{/* Toast notifications */}
			<>
				<Toaster position="top-center" reverseOrder={false} />
			</>
			{/* Navbar component */}
			<Navbar />
			{/* Defining application routes */}
			<Routes>
				{/* Public routes accessible without authentication */}
				<Route element={<PublicRoute user={user} />}>
					<Route path="/" element={<Landing />} />
					{/* Landing page */}
					<Route path="/auth" element={<Auth />} />
					{/* Authentication page */}
				</Route>

				{/* Private routes accessible only with authentication */}
				<Route element={<PrivateRoute user={user} />}>
					<Route path="/dashboard" element={<Dashboard />} />
					{/* Dashboard page */}
					<Route
						path="/snippet:id"
						element={<SnippetDetails />}
					/>
					{/* Snippet details page */}
					<Route path="/editor" element={<SnippetEditor />} />
					{/* Snippet editor page */}
					<Route path="/editor:id" element={<SnippetEditor />} />
					{/* Snippet editor with ID */}
				</Route>

				{/* Fallback route for undefined paths */}
				<Route path="*" element={<Error />} />
			</Routes>
			{/* Footer component */}
			<Footer />
		</div>
	);
}

export default App;
