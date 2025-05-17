// components/SearchBar.js
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="relative w-full md:w-96 mb-12">
			<FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" />
			<input
				type="text"
				placeholder="Search snippets..."
				className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-accent/30 bg-primary text-secondary focus:border-accent focus:outline-none placeholder-secondary/60"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
