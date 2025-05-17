import React, { useContext } from "react";
import { TitleCard, SnippetCard } from "../Components";
import { Context } from "../Contexts/Context";
import { testSnippets } from "../Constants/Constants";

// PinnedFrag component displays only pinned code snippets
const PinnedFrag = () => {
	const { pinnedSnippets } = useContext(Context); // Get pinned snippet IDs from context

	// Filter snippets to only show pinned ones
	const filteredSnippets = testSnippets.filter((snippet) =>
		pinnedSnippets.includes(snippet.id)
	);

	return (
		<section className="bg-primary min-h-full">
			<div className="container mx-auto px-4">
				<div className="pb-20">
					<TitleCard title={"Pinned Frag"} /> {/* Page title */}
				</div>

				{/* Show message if no snippets are pinned */}
				{filteredSnippets.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-secondary/70 text-lg">
							No snippets pinned yet. Pin your favorites to
							see them here!
						</p>
					</div>
				) : (
					// Display pinned snippets in a grid
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredSnippets.map((snippet) => (
							<SnippetCard
								key={snippet.id}
								snippet={snippet}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default PinnedFrag;
