import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

function ContextProvider(props) {
	const [isLogin, setIsLogin] = useState(true);
	const navigate = useNavigate();

	const [isPinned, setIsPinned] = useState(false);

	const [pinnedSnippets, setPinnedSnippets] = useState([]);

	const togglePin = (snippetId) => {
		setPinnedSnippets((prev) => {
			if (prev.includes(snippetId)) {
				toast.success("Snippet unpinned!");
				return prev.filter((id) => id !== snippetId);
			} else {
				toast.success("Snippet pinned!");
				return [...prev, snippetId];
			}
		});
	};

	// Custom styles for react-select
	const customStyles = {
		control: (provided) => ({
			...provided,
			backgroundColor: "#071C21",
			borderColor: "rgba(198, 222, 65, 0.5)",
			borderWidth: "2px",
			borderRadius: "16px",
			minHeight: "56px",
			paddingLeft: "12px",
			boxShadow: "none",
			"&:hover": {
				borderColor: "rgba(198, 222, 65, 0.7)",
			},
		}),
		option: (provided, state) => ({
			...provided,
			backgroundColor: state.isSelected
				? "rgba(198, 222, 65, 0.2)"
				: state.isFocused
				? "rgba(244, 235, 208, 0.1)"
				: "#071C21",
			color: state.isSelected ? "#F4EBD0" : "#F4EBD0",
			padding: "12px 16px",
		}),
		menu: (provided) => ({
			...provided,
			backgroundColor: "#071C21",
			border: "2px solid rgba(198, 222, 65, 0.3)",
			borderRadius: "12px",
			zIndex: 9999,
		}),
		singleValue: (provided) => ({
			...provided,
			color: "#F4EBD0",
		}),
		input: (provided) => ({
			...provided,
			color: "#F4EBD0",
		}),
		dropdownIndicator: (provided) => ({
			...provided,
			color: "#C6DE41",
			"&:hover": {
				color: "#F4EBD0",
			},
		}),
		indicatorSeparator: () => ({
			display: "none",
		}),
	};

	const languageOptions = [
		{ value: "javascript", label: "JavaScript" },
		{ value: "typescript", label: "TypeScript" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },
		{ value: "csharp", label: "C#" },
		{ value: "php", label: "PHP" },
		{ value: "ruby", label: "Ruby" },
		{ value: "go", label: "Go" },
		{ value: "rust", label: "Rust" },
		{ value: "swift", label: "Swift" },
		{ value: "kotlin", label: "Kotlin" },
		{ value: "cpp", label: "C++" },
		{ value: "c", label: "C" },
		{ value: "css", label: "CSS" },
		{ value: "html", label: "HTML" },
		{ value: "scss", label: "SCSS" },
		{ value: "json", label: "JSON" },
		{ value: "yaml", label: "YAML" },
		{ value: "markdown", label: "Markdown" },
		{ value: "sql", label: "SQL" },
		{ value: "shell", label: "Shell Script" },
		{ value: "dockerfile", label: "Dockerfile" },
	];

	const value = {
		isLogin,
		setIsLogin,
		navigate,
		isPinned,
		setIsPinned,
		togglePin,
		customStyles,
		languageOptions,
		pinnedSnippets,
		setPinnedSnippets,
	};

	return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default ContextProvider;
