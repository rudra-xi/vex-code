import React from "react";
import { FaLinkedin, FaInstagram, FaCode, FaPaperPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
	return (
		<section className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
			<div className="space-y-8">
				{/* Header Section */}
				<div className="space-y-2">
					{/* Title */}
					<h1 className="text-3xl font-bold text-secondary flex items-center gap-3">
						<FaPaperPlane className="text-accent" />
						Contact Me
					</h1>
					{/* Subtitle */}
					<p className="text-accent/50">
						Have questions about VexCode? Here's how to reach
						me:
					</p>
				</div>

				{/* Contact Methods Section */}
				<div className="grid md:grid-cols-2 gap-6">
					{/* Social Media Card */}
					<div className="border border-accent/50 rounded-lg p-6 hover:shadow-md transition-shadow">
						{/* Card Title */}
						<h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
							<FaCode className="text-accent" />
							Developer Channels
						</h3>
						{/* Social Links */}
						<div className="space-y-4">
							{/* LinkedIn Link */}
							<a
								href="https://www.linkedin.com/in/goutam-rudraxi"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-secondary hover:text-accent transition-colors"
							>
								<FaLinkedin className="text-2xl text-accent" />
								<div>
									<p className="font-medium">
										LinkedIn
									</p>
									<p className="text-sm text-secondary/50">
										Professional inquiries
									</p>
								</div>
							</a>
							{/* Instagram Link */}
							<a
								href="https://www.instagram.com/rudra.xii/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-secondary hover:text-accent transition-colors"
							>
								<FaInstagram className="text-2xl text-accent" />
								<div>
									<p className="font-medium">
										Instagram
									</p>
									<p className="text-sm text-secondary/50">
										Quick questions
									</p>
								</div>
							</a>
						</div>
					</div>

					{/* Email Card */}
					<div className="border border-accent/50 rounded-lg p-6 hover:shadow-md transition-shadow">
						{/* Card Title */}
						<h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
							<HiOutlineMail className="text-accent" />
							Email
						</h3>
						{/* Email Details */}
						<div className="space-y-2">
							<p className="text-secondary/50">
								For detailed support:
							</p>
							<a
								href="mailto:goutam.rudra.xi@gmail.com"
								className="inline-flex items-center gap-2 text- hover:underline"
							>
								<HiOutlineMail className="text-accent" />
								goutam.rudra.xi@gmail.com
							</a>
							<p className="text-sm text-secondary/50 mt-3">
								Response time: 1-2 business days
							</p>
						</div>
					</div>
				</div>

				{/* Additional Info Section */}
				<div className="pt-6 border-t border-accent/60">
					<p className="text-accent/50 text-sm">
						<strong>Note:</strong> For bug reports, please use
						GitHub Issues on the VexCode repository.
					</p>
				</div>

				{/* Contribution Section */}
				<div className="text-center pt-6 border-t border-accent/20">
					<p className="text-secondary/70 mb-4">
						Want to contribute to VexCode?
					</p>
					<a
						href="https://github.com/rudra-xi/vex-code"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-full font-medium hover:-translate-y-1 transition-all ease-in duration-300"
					>
						<FaCode />
						Become a Contributor
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;
