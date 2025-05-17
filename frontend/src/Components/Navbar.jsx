import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import logo from "../Assets/logo.svg"; // Importing logo image
import { navLinks } from "../Constants/Constants";
import { Context } from "../Contexts/Context";

function Navbar() {
	const { isLogin, setIsLogin, navigate } = useContext(Context); // Get login state and navigation from context
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu open/close

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false); // Close mobile menu
	};

	const handleLogout = () => {
		setIsLogin(false); // Set login state to false
		closeMobileMenu(); // Close menu after logout
		navigate("/"); // Redirect to home
	};

	const handleNavLinkClick = (link) => {
		closeMobileMenu(); // Close menu after clicking a link
		navigate(link); // Navigate to the selected link
	};

	return (
		// Main navigation bar container
		<nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-10 py-5 flex justify-between items-center bg-primary shadow-md">
			{/* Logo Section */}
			<Link
				to="/"
				className="flex items-center gap-5"
				onClick={closeMobileMenu} // Close menu when logo clicked
			>
				<img src={logo} alt="VexCode Logo" className="w-10" />
				<p className="font-abril text-4xl">VexCode</p>
			</Link>

			{/* Desktop Navigation Links */}
			<div className="hidden md:flex items-center">
				{isLogin ? (
					// If logged in, show nav links and logout button
					<div className="flex items-center space-x-10">
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
						<button
							onClick={handleLogout}
							className="font-bold flex gap-2 items-center border-2 hover:text-accent rounded-full px-4 py-2 hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer"
						>
							<span>Logout</span>
							<BiLogOutCircle className="text-accent" />
						</button>
					</div>
				) : (
					// If not logged in, show login button
					<Link
						to="/auth"
						className="font-bold flex gap-2 items-center border-2 rounded-full px-6 py-2 hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer"
					>
						<span>Login</span>
						<BiLogInCircle className="text-accent" />
					</Link>
				)}
			</div>

			{/* Mobile Menu Toggle Button */}
			<button
				className="md:hidden text-2xl z-50 text-accent"
				onClick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				{isMobileMenuOpen ? <FiX /> : <FiMenu />}
			</button>

			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div
					className="fixed inset-0 bg-primary bg-opacity-50 z-40"
					onClick={closeMobileMenu}
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
						{isLogin ? (
							// If logged in, show nav links and logout button in mobile menu
							<>
								{navLinks.map((link, idx) => (
									<button
										key={idx}
										onClick={() =>
											handleNavLinkClick(
												link.link
											)
										}
										className="text-lg flex items-center py-3 px-4 hover:bg-accent/10 rounded-lg transition-colors"
									>
										<span className="mr-3">
											{link.icon}
										</span>
										{link.text}
									</button>
								))}
								<button
									onClick={handleLogout}
									className="font-bold border-2 border-accent rounded-full px-4 py-2 mt-4 w-full hover:bg-accent/10 transition-colors"
								>
									Logout
								</button>
							</>
						) : (
							// If not logged in, show login button in mobile menu
							<button
								onClick={() =>
									handleNavLinkClick("/auth")
								}
								className="font-bold border-2 border-accent rounded-full px-6 py-2 w-full text-center hover:bg-accent/10 transition-colors"
							>
								Login
							</button>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
