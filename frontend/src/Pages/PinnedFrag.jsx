import React, { useContext } from "react";
import { TitleCard, SnippetCard } from "../Components";
import { Context } from "../Contexts/Context";
import { testSnippets } from "../Constants/Constants";

const PinnedFrag = () => {
	const { pinnedSnippets } = useContext(Context);

	// Filter snippets to only show pinned ones
	const filteredSnippets = testSnippets.filter((snippet) =>
		pinnedSnippets.includes(snippet.id)
	);

	return (
		<section className="bg-primary">
			<div className="container mx-auto px-4">
				<div className="pb-20">
					<TitleCard title={"Pinned Frag"} />
				</div>

				{filteredSnippets.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-secondary/70 text-lg">
							No snippets pinned yet. Pin your favorites to
							see them here!
						</p>
					</div>
				) : (
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
