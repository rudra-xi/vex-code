import React from "react";
import { Link } from "react-router-dom"; // For navigation between routes
import { FaBug, FaHome } from "react-icons/fa"; // Importing icons
import { ErrorSVG } from "../Components"; // Custom SVG component for error illustration

function Error() {
	return (
		// Main container with styling for full-screen layout and gradient background
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-dark text-secondary p-6 text-center">
			{/* SVG Container - displays the error illustration */}
			<div className="">
				<ErrorSVG />
			</div>

			{/* Error message with styling */}
			<p className="max-w-md text-lg mb-8 opacity-90 mt-4">
				The page you're looking for doesn't exist or has been moved.
				Try double-checking the URL or navigate back to safety.
			</p>

			{/* Buttons for navigation and reporting issues */}
			<div className="flex flex-wrap justify-center gap-4">
				{/* Link to navigate back to the home page */}
				<Link
					to="/"
					className="flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-full font-bold hover:bg-accent/90 transition-all"
				>
					<FaHome /> {/* Home icon */}
					Return Home
				</Link>

				{/* External link to report an issue on GitHub */}
				<a
					href="https://github.com/rudra-xi/vex-code/issues"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-full font-bold hover:bg-accent/10 transition-all"
				>
					<FaBug /> {/* Bug icon */}
					Report Issue
				</a>
			</div>
		</div>
	);
}

export default Error; // Exporting the Error component for use in other parts of the app
