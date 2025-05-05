import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Footer, Navbar, Contact } from "./Components"; // Importing reusable components
import {
	Auth,
	Dashboard,
	Landing,
	SnippetDetails,
	SnippetEditor,
	Error,
} from "./Pages"; // Importing page components
import { PrivateRoute, PublicRoute } from "./Security"; // Importing route guards
import { Terms, Policy } from "./Pages/Legal"; // Importing legal pages
import { Context } from "./Contexts/Context"; // Importing context for global state

function App() {
	const { user } = useContext(Context); // Accessing the user from context

	return (
		<div className="w-full h-full bg-primary text-secondary font-raleway">
			{/* Toast notifications for user feedback */}
			<>
				<Toaster position="top-center" reverseOrder={false} />
			</>
			{/* Navbar component for navigation */}
			<Navbar />
			<div className="sm:px-28 px-10 py-5 pt-30">
				{/* Defining application routes */}
				<Routes>
					{/* Public routes accessible without authentication */}
					<Route element={<PublicRoute user={user} />}>
						{/* Landing page */}
						<Route path="/" element={<Landing />} />
						{/* Authentication page */}
						<Route path="/auth" element={<Auth />} />
					</Route>

					{/* Private routes accessible only with authentication */}
					<Route element={<PrivateRoute user={user} />}>
						{/* Dashboard page */}
						<Route
							path="/dashboard"
							element={<Dashboard />}
						/>
						{/* Snippet details page */}
						<Route
							path="/snippet:id"
							element={<SnippetDetails />}
						/>
						{/* Snippet editor page */}
						<Route
							path="/editor"
							element={<SnippetEditor />}
						/>
						{/* Snippet editor with ID */}
						<Route
							path="/editor:id"
							element={<SnippetEditor />}
						/>
					</Route>

					{/* Legal and contact pages */}
					<Route path="/privacy" element={<Policy />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/contact" element={<Contact />} />

					{/* Fallback route for undefined paths */}
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
			{/* Footer component for additional information */}
			<Footer />
		</div>
	);
}

export default App;
