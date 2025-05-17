import React from "react";
import { TitleCard } from "../Components"; // Importing the TitleCard component
import { landingFeatures, landingSnippets } from "../Constants/Constants"; // Importing feature data
import { Link } from "react-router-dom"; // Importing Link for navigation
import { MdOutlineTerminal } from "react-icons/md"; // Importing an icon from react-icons
import { Editor } from "@monaco-editor/react";

const Landing = () => {
	const editorOptions = {
		readOnly: true,
		minimap: { enabled: false },
		lineNumbers: "off",
		folding: false,
		scrollBeyondLastLine: false,
		fontSize: 13,
		fontFamily: "'Fira Code', monospace",
		renderLineHighlight: "none",
		scrollbar: {
			vertical: "hidden",
			horizontal: "hidden",
		},
	};
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
					<div
						key={idx}
						className="border-2 rounded-3xl hover:-translate-y-1.5 transition-all ease-in duration-300"
					>
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

			{/* Example Snippets Section */}
			<div className="my-16">
				<h2 className="text-3xl font-bold mb-8 text-center">
					<span className="text-accent">Popular</span> Snippet
					Examples
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{landingSnippets.map((snippet, index) => (
						<div
							key={index}
							className="border-2 border-accent/20 rounded-2xl overflow-hidden hover:border-accent/40 transition-all"
						>
							<div className="p-4 bg-primary/50">
								<h3 className="text-xl font-bold text-secondary mb-2">
									{snippet.title}
								</h3>
								<p className="text-sm text-secondary/80 mb-3">
									{snippet.description}
								</p>
								<div className="h-60 rounded-lg overflow-hidden">
									<Editor
										height="100%"
										language={snippet.language}
										value={snippet.code}
										theme="vs-dark"
										options={editorOptions}
										loading={
											<div className="h-full flex items-center justify-center bg-[#1e1e1e] text-secondary">
												Loading snippet...
											</div>
										}
										beforeMount={(monaco) => {
											monaco.editor.defineTheme(
												"landing-theme",
												{
													base: "vs-dark",
													inherit: true,
													rules: [
														{
															token: "keyword",
															foreground:
																"C6DE41",
														},
													],
													colors: {
														"editor.background":
															"#071C21",
													},
												}
											);
										}}
										onMount={(editor) => {
											editor.updateOptions({
												theme: "landing-theme",
											});
										}}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
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
