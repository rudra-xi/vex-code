import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { logo, FiMenu, FiX } from "../Assets";
import { navLinks } from "../Constants/Constants";
import { Context } from "../Contexts/Context";

function Navbar() {
	const { isLogin, setIsLogin, navigate } = useContext(Context);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const handleLogout = () => {
		setIsLogin(false);
		closeMobileMenu(); // Close menu after logout
		navigate("/"); // Redirect to home
	};

	const handleNavLinkClick = (link) => {
		closeMobileMenu();
		navigate(link); // Programmatic navigation
	};

	return (
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
							className="font-bold border-2 hover:text-accent rounded-full px-4 py-2 hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer"
						>
							Logout
						</button>
					</div>
				) : (
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
