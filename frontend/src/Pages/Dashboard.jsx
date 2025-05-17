// pages/Dashboard.js
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { TitleCard, SnippetCard, SearchBar } from "../Components";
import { Context } from "../Contexts/Context";
import { testSnippets } from "../Constants/Constants";

const Dashboard = () => {
	const { isPinned, togglePin } = useContext(Context);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		if (typeof window !== "undefined" && window.monaco) {
			monaco.editor.defineTheme("vexcode-dark-preview", {
				base: "vs-dark",
				inherit: true,
				rules: [{ token: "keyword", foreground: "C6DE41" }],
				colors: {
					"editor.background": "#071C21",
					"editor.foreground": "#F4EBD0",
					"editor.lineHighlightBackground": "#0A252D",
				},
			});
		}
	}, []);

	const filteredSnippets = testSnippets.filter((snippet) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			snippet.title.toLowerCase().includes(searchLower) ||
			snippet.language.toLowerCase().includes(searchLower) ||
			snippet.search.some((search) =>
				search.toLowerCase().includes(searchLower)
			) ||
			snippet.code.toLowerCase().includes(searchLower)
		);
	});

	return (
		<section className="bg-primary">
			<div className="container mx-auto px-4">
				<div className="pb-20">
					<TitleCard title={"My Snippets"} />
				</div>

				<SearchBar
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>

				{/* Snippet Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Add New Card */}
					<Link
						to="/snippet"
						className="border-2 border-dashed border-accent/30 rounded-2xl flex flex-col items-center justify-center gap-4 p-8 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
					>
						<FiPlus className="text-3xl text-accent" />
						<span className="font-medium text-lg text-secondary">
							New Snippet
						</span>
					</Link>

					{/* Render filtered snippets */}
					{filteredSnippets.map((snippet) => (
						<SnippetCard key={snippet.id} snippet={snippet} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
