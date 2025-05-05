import React from "react";
import { TitleCard } from "../Components"; // Importing the TitleCard component
import { landingFeatures } from "../Constants/Constants"; // Importing feature data
import { Link } from "react-router-dom"; // Importing Link for navigation
import { MdOutlineTerminal } from "react-icons/md"; // Importing an icon from react-icons

const Landing = () => {
	return (
		<section>
			{/* Header Section */}
			<TitleCard title={"VexCode"} />

			{/* Hero Text Section */}
			<div className="my-10 flex flex-col gap-3">
				<h1 className="text-4xl font-bold">
					Welcome to VexCode – Your Code Snippet Superpower!
				</h1>
				<p className="text-lg">
					Store, organize, and reuse your code snippets like a
					pro—because why type the same thing twice when you can
					VexCode it?
				</p>
				<p className="text-accent italic">
					"Code less. Reuse more. Look smarter."
				</p>
			</div>

			{/* Feature Cards Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
				{/* Looping through landingFeatures to display feature cards */}
				{landingFeatures.map((feature, idx) => (
					<div key={idx} className="border-2 rounded-3xl">
						<div className="text-secondary p-6 flex flex-col items-center gap-4">
							{/* Feature Icon */}
							{feature.icon}
							<div className="text-center flex flex-col gap-2">
								{/* Feature Title */}
								<h3 className="text-xl font-abril tracking-wider uppercase">
									{feature.title}
								</h3>
								{/* Feature Subtitle */}
								<h4 className="italic text-accent">
									{feature.subtitle}
								</h4>
								{/* Feature Description */}
								<p className="text-sm">
									{feature.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Testimonial Section */}
			<div className="bg-primary text-secondary p-8 rounded-3xl max-w-5xl mx-auto my-12 border-2 border-accent">
				<p className="text-xl italic mb-2">
					"VexCode is like my `.env` file—stores all the critical
					stuff my brain keeps failing to `commit` to memory."
				</p>
				<p className="font-bold text-accent">
					– git commit -m "Brain optimized"
				</p>
			</div>

			{/* Call to Action (CTA) Section */}
			<div className="text-center my-16">
				<h2 className="text-3xl font-bold mb-4">
					Your Future Self{" "}
					<span className="text-accent">Will Thank You</span>
				</h2>
				<p className="text-lg mb-6 max-w-2xl mx-auto">
					Because{" "}
					<span className="text-accent/30 line-through">
						"Where did I put that function?"
					</span>{" "}
					becomes{" "}
					<span className="text-accent font-semibold">
						"Right where I left it"
					</span>
				</p>

				{/* Link to GitHub Repository */}
				<Link
					href="https://github.com/rudra-xi/vex-code"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-full font-medium hover:-translate-y-1 transition-all ease-in duration-300"
				>
					<MdOutlineTerminal className="animate-bounce" />
					Dive Into VexCode
				</Link>

				{/* Fun Footer Text */}
				<p className="text-sm mt-3 text-accent/40">
					Side effects may include: 73% fewer Stack Overflow tabs
				</p>
			</div>
		</section>
	);
};

export default Landing;
