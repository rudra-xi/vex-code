import React from "react";
import {
	FaUserShield,
	FaLock,
	FaTrashAlt,
	FaLinkedin,
	FaInstagram,
} from "react-icons/fa";
import { HiOutlineCollection, HiOutlineClock } from "react-icons/hi";

function Policy() {
	return (
		<section className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
			<div className="space-y-6">
				{/* Header Section */}
				<div className="space-y-2">
					{/* Title */}
					<h1 className="text-3xl font-bold text-secondary">
						Privacy Policy
					</h1>
					{/* Last Updated Date */}
					<p className="text-sm text-accent/50">
						Last Updated: {new Date().toLocaleDateString()}
					</p>
				</div>

				{/* Section 1: Data We Collect */}
				<div className="space-y-3">
					<h2 className="text-xl font-semibold flex items-center gap-2">
						{/* Icon and Section Title */}
						<FaUserShield className="text-accent" />
						1. Data We Collect
					</h2>
					{/* List of Data Collected */}
					<ul className="space-y-2 list-disc list-inside">
						<li className="flex items-start gap-2 text-secondary/60">
							{/* Icon and Description */}
							<HiOutlineCollection className="flex-shrink-0 mt-1 text-accent" />
							Account information (email, username) when
							you register
						</li>
						<li className="flex items-start gap-2 text-secondary/60">
							<HiOutlineCollection className="flex-shrink-0 mt-1 text-accent" />
							Code snippets and related metadata you save
						</li>
						<li className="flex items-start gap-2 text-secondary/60">
							<HiOutlineClock className="flex-shrink-0 mt-1 text-accent" />
							Usage data (features accessed, session
							duration)
						</li>
					</ul>
				</div>

				{/* Section 2: How We Use Your Data */}
				<div className="space-y-3">
					<h2 className="text-xl font-semibold">
						2. How We Use Your Data
					</h2>
					{/* Description of Data Usage */}
					<p className="text-secondary/60">
						We only use your data to provide and improve
						VexCode. Your snippets remain private unless you
						choose to share them via public links.
					</p>
				</div>

				{/* Section 3: Data Security */}
				<div className="space-y-3">
					<h2 className="text-xl font-semibold flex items-center gap-2">
						{/* Icon and Section Title */}
						<FaLock className="text-accent" />
						3. Data Security
					</h2>
					{/* Description of Security Measures */}
					<p className="text-secondary/60">
						All data is encrypted in transit (HTTPS) and
						stored securely in MongoDB Atlas.
					</p>
				</div>

				{/* Section 4: Your Rights */}
				<div className="space-y-3">
					<h2 className="text-xl font-semibold flex items-center gap-2">
						{/* Icon and Section Title */}
						<FaTrashAlt className="text-accent" />
						4. Your Rights
					</h2>
					{/* Description of User Rights */}
					<p className="text-secondary/60">
						You can delete your account and all associated
						data at any time through your dashboard settings.
					</p>
				</div>

				{/* Contact Section */}
				<div className="pt-8">
					{/* Contact Prompt */}
					<p className="text-gray-700 dark:text-gray-300 mb-3">
						Questions? Contact me through:
					</p>
					{/* Social Media Links */}
					<div className="flex gap-4">
						<a
							href="https://www.linkedin.com/in/goutam-rudraxi"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-accent hover:text-secondary hover:underline"
						>
							{/* LinkedIn Link */}
							<FaLinkedin className="text-lg" />
							LinkedIn
						</a>
						<a
							href="https://www.instagram.com/rudra.xii/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-accent hover:text-secondary hover:underline"
						>
							{/* Instagram Link */}
							<FaInstagram className="text-lg" />
							Instagram
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Policy;
