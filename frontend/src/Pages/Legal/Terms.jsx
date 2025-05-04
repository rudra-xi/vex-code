import React from "react";
import {
	FaUserCheck,
	FaCode,
	FaShieldAlt,
	FaBalanceScale,
	FaExclamationTriangle,
	FaInfoCircle,
} from "react-icons/fa";

// Terms component to display the Terms of Service page
function Terms() {
	return (
		<section className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
			<div className="space-y-8">
				{/* Header Section */}
				<div className="space-y-2">
					{/* Title */}
					<h1 className="text-3xl font-bold text-secondary">
						Terms of Service
					</h1>
					{/* Effective date */}
					<p className="text-sm text-accent/50">
						Effective: {new Date().toLocaleDateString()}
					</p>
				</div>

				{/* Section 1: Account Responsibilities */}
				<div className="space-y-3">
					<h2 className="text-xl font-semibold text-secondary flex items-center gap-2">
						{/* Icon and title */}
						<FaUserCheck className="text-accent" />
						1. Account Responsibilities
					</h2>
					{/* List of responsibilities */}
					<ul className="space-y-2 list-disc list-inside text-secondary/60">
						<li className="flex items-start gap-2">
							{/* Icon and description */}
							<FaInfoCircle className="flex-shrink-0 mt-1 text-accent" />
							You must be at least 13 years old to use
							VexCode
						</li>
						<li className="flex items-start gap-2">
							<FaInfoCircle className="flex-shrink-0 mt-1 text-accent" />
							You're responsible for all activity under
							your account
						</li>
					</ul>
				</div>

				{/* Section 2: Acceptable Use */}
				<div className="space-y-3">
					<h2 className="text-xl font-semibold text-secondary flex items-center gap-2">
						{/* Icon and title */}
						<FaExclamationTriangle className="text-accent" />
						2. Acceptable Use
					</h2>
					{/* List of acceptable use policies */}
					<ul className="space-y-2 list-disc list-inside text-secondary/60">
						<li className="flex items-start gap-2">
							{/* Icon and description */}
							<FaCode className="flex-shrink-0 mt-1 text-accent" />
							Do not store or share illegal/malicious code
						</li>
						<li className="flex items-start gap-2">
							<FaCode className="flex-shrink-0 mt-1 text-accent" />
							No spamming or automated scraping
						</li>
						<li className="flex items-start gap-2">
							<FaCode className="flex-shrink-0 mt-1 text-accent" />
							Respect others' intellectual property
						</li>
					</ul>
				</div>

				{/* Section 3: Content Ownership */}
				<div className="space-y-3">
					<h2 className="text-xl font-semibold text-secondary flex items-center gap-2">
						{/* Icon and title */}
						<FaBalanceScale className="text-accent" />
						3. Content Ownership
					</h2>
					{/* Description of content ownership */}
					<p className="text-secondary/60">
						You retain all rights to your code snippets. By
						uploading content, you grant us a license to store
						and display it as part of the service.
					</p>
				</div>

				{/* Section 4: Service Limitations */}
				<div className="space-y-3">
					<h2 className="text-xl font-semibold text-secondary flex items-center gap-2">
						{/* Icon and title */}
						<FaShieldAlt className="text-accent" />
						4. Service Limitations
					</h2>
					{/* Description of service limitations */}
					<p className="text-secondary/60">
						VexCode is provided "as-is" without warranties. We
						may remove content that violates these terms
						without notice.
					</p>
				</div>

				{/* Footer Section */}
				<div className="pt-6 border-t-2 border-accent/60">
					{/* Disclaimer about updates */}
					<p className="text-secondary/60">
						These terms may be updated periodically. Continued
						use of VexCode constitutes acceptance of the
						current terms.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Terms;
