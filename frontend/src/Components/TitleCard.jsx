import React from "react";

function TitleCard({ title }) {
	return (
		<div className="flex font-abril items-center gap-3">
			<div className="w-1 h-12 bg-accent"></div>
			<div className="text-5xl sm:text-6xl">
				{title}

				<span className="text-accent ml-3">~</span>
			</div>
		</div>
	);
}

export default TitleCard;
