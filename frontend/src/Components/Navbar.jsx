import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { logo, FiMenu, FiX } from "../Assets";
import { navLinks } from "../Constants/Constants";
import { Context } from "../Contexts/Context";

function Navbar() {
	// Access the user context to check if a user is logged in
	const { user } = useContext(Context);

	// State to manage the visibility of the mobile menu
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Function to toggle the mobile menu
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="px-4 sm:px-10 py-5 flex justify-between items-center relative">
			{/* Logo Section */}
			<Link to="/" className="flex items-center gap-5 z-50">
				<img src={logo} alt="VexCode Logo" className="w-10" />
				<p className="font-abril text-4xl">VexCode</p>
			</Link>

			{/* Desktop Navigation Links */}
			<div className="hidden md:flex items-center">
				{/* If user is logged in, show navigation links and logout button */}
				{user ? (
					<div className="flex items-center space-x-10">
						{/* Map through navLinks to render each link */}
						{navLinks.map((link, idx) => (
							<Link
								to={link.link}
								key={idx}
								className="hover:scale-105 hover:text-accent transition-all duration-300 ease-in-out flex items-center"
							>
								{link.icon}
								{link.text}
							</Link>
						))}
						{/* Logout button */}
						<button className="font-bold border-2 hover:text-accent rounded-full px-4 py-2 hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
							Logout
						</button>
					</div>
				) : (
					// If no user is logged in, show login button
					<Link
						to="/auth"
						className="font-bold border-2 rounded-full px-6 py-2 hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer"
					>
						Login
					</Link>
				)}
			</div>

			{/* Mobile Menu Toggle Button */}
			<button
				className="md:hidden text-2xl z-50"
				onClick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				{/* Show menu icon or close icon based on menu state */}
				{isMobileMenuOpen ? <FiX /> : <FiMenu />}
			</button>

			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div
					className="fixed inset-0 bg-primary bg-opacity-50 z-40"
					onClick={toggleMobileMenu}
				></div>
			)}

			{/* Mobile Menu Content */}
			<div
				className={`fixed top-0 right-0 h-full w-full bg-primary text-secondary shadow-lg transform ${
					isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out z-40 md:hidden`}
			>
				<div className="flex flex-col h-full p-6">
					<div className="flex-1 flex flex-col space-y-8 mt-20">
						{/* If user is logged in, show navigation links and logout button */}
						{user ? (
							<>
								{navLinks.map((link, idx) => (
									<Link
										to={link.link}
										key={idx}
										className="text-lg flex items-center py-2"
										onClick={toggleMobileMenu}
									>
										{link.icon}
										{link.text}
									</Link>
								))}
								{/* Logout button */}
								<button className="font-bold border-2 rounded-full px-4 py-2 mt-4 w-full">
									Logout
								</button>
							</>
						) : (
							// If no user is logged in, show login button
							<Link
								to="/auth"
								className="font-bold border-2 rounded-full px-6 py-2 w-full text-center"
							>
								Login
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
