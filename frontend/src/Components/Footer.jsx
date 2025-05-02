import React from "react";
import { FaHeart } from "react-icons/fa";
import { footerSocialLinks } from "../Constants/Constants";

function Footer() {
	return (
		<footer className="bg-primary border-t-2 border-accent text-secondary py-8 px-4 mt-auto">
			<div className="max-w-7xl mx-auto">
				{/* Main container for footer content */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					{/* Copyright & Branding Section */}
					<div className="flex flex-col items-center md:items-start gap-2">
						{/* Branding Name */}
						<span className="text-lg font-semibold">
							VexCode
						</span>
						{/* Built with love message */}
						<div className="flex items-center text-sm">
							<span>Built with</span>
							<FaHeart className="mx-1 text-accent animate-pulse" />
							<span>by RudraXi</span>
						</div>
						{/* Copyright notice */}
						<span className="text-xs text-secondary/60">
							© {new Date().getFullYear()} All rights
							reserved
						</span>
					</div>

					{/* Links Container */}
					<div className="flex flex-col items-center md:items-end gap-6">
						{/* Social Links Section */}
						<div className="flex space-x-4">
							{/* Dynamically render social links */}
							{footerSocialLinks.map((link, idx) => (
								<a
									key={idx}
									href={link.link}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-accent transition-colors duration-300 text-xl"
									aria-label={link.name}
								>
									{link.icon}
								</a>
							))}
						</div>

						{/* Additional Links Section */}
						<div className="flex flex-wrap justify-center gap-4 text-sm">
							{/* Privacy Policy Link */}
							<a
								href="/privacy"
								className="hover:text-accent hover:underline"
							>
								Privacy Policy
							</a>
							{/* Terms of Service Link */}
							<a
								href="/terms"
								className="hover:text-accent hover:underline"
							>
								Terms of Service
							</a>
							{/* Contact Link */}
							<a
								href="/contact"
								className="hover:text-accent hover:underline"
							>
								Contact
							</a>
						</div>
					</div>
				</div>

				{/* Attribution Section */}
				<div className="mt-8 text-center text-xs text-secondary/60">
					<p>Your code, your vault—VexCode secures it all.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
