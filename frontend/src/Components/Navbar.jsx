import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons
import { logo } from "../Assets";
import { navLinks } from "../Constants/Constants";
import { Context } from "../Contexts/Context";

function Navbar() {
	const { user } = useContext(Context);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="px-4 sm:px-10 py-5 flex justify-between items-center relative">
			{/* Logo */}
			<Link to="/" className="flex items-center gap-5 z-50">
				<img src={logo} alt="VexCode Logo" className="w-10" />
				<p className="font-abril text-4xl">VexCode</p>
			</Link>

			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center">
				{user ? (
					<div className="flex items-center space-x-10">
						{navLinks.map((link, idx) => (
							<Link
								to={link.link}
								key={idx}
								className="hover:scale-105 transition-all duration-300 ease-in-out"
							>
								{link.text}
							</Link>
						))}
						<button className="font-bold border-2 rounded-full px-4 py-2 hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
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

			{/* Mobile Menu Button */}
			<button
				className="md:hidden text-2xl z-50"
				onClick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
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
				} transition-transform duration-1000 ease-slide z-40 md:hidden`}
			>
				<div className="flex flex-col h-full p-6">
					<div className="flex-1 flex flex-col space-y-8 mt-20">
						{user ? (
							<>
								{navLinks.map((link, idx) => (
									<Link
										to={link.link}
										key={idx}
										className="text-lg"
										onClick={toggleMobileMenu}
									>
										{link.text}
									</Link>
								))}
								<button className="font-bold border-2 rounded-full px-4 py-2 mt-4 w-full">
									Logout
								</button>
							</>
						) : (
							<button className="font-bold border-2 rounded-full px-6 py-2 w-full">
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
