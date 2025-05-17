import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import { Context } from "../Contexts/Context";
import Editor from "@monaco-editor/react";
import { RiPushpinFill, RiPushpinLine } from "react-icons/ri";
import { TbClipboard, TbChevronDown, TbChevronUp } from "react-icons/tb";

// SnippetCard component receives a snippet object as a prop
const SnippetCard = ({ snippet }) => {
	const { pinnedSnippets, togglePin } = useContext(Context); // Get pinned snippets and togglePin from context
	const [isExpanded, setIsExpanded] = useState(false); // State for description expand/collapse
	const isPinned = pinnedSnippets.includes(snippet.id); // Check if this snippet is pinned

	// Copy code to clipboard and show toast
	const handleCopyCode = () => {
		navigator.clipboard.writeText(snippet.code);
		toast.success("Code copied to clipboard!");
	};

	// Toggle description expand/collapse
	const toggleDescription = () => {
		setIsExpanded(!isExpanded);
	};

	// Define a custom theme for the Monaco editor
	const setupEditor = (monaco) => {
		monaco.editor.defineTheme("snippet-card-theme", {
			base: "vs-dark",
			inherit: true,
			rules: [
				{ token: "keyword", foreground: "C6DE41" },
				{ token: "string", foreground: "F4EBD0" },
				{ token: "number", foreground: "C6DE41" },
				{ token: "type", foreground: "C6DE41" },
				{ token: "comment", foreground: "6B7280" },
			],
			colors: {
				"editor.background": "#071C21",
				"editor.foreground": "#F4EBD0",
				"editor.lineHighlightBackground": "#0A252D",
				"editor.lineNumbers": "#F4EBD060",
				"editorGutter.background": "#071C21",
				"editorCursor.foreground": "#C6DE41",
				"editor.selectionBackground": "#C6DE4130",
				"editor.inactiveSelectionBackground": "#C6DE4120",
				"editorIndentGuide.background": "#F4EBD020",
				"editorIndentGuide.activeBackground": "#F4EBD040",
			},
		});
	};

	return (
		// Card container with border and background
		<div
			className={`border-2 rounded-2xl transition-all duration-300 hover:-translate-y-1 bg-primary/90 group ${
				isPinned
					? "border-accent/60"
					: "border-accent/20 hover:border-accent/40"
			}`}
		>
			<div className="p-5 flex flex-col gap-4 h-full">
				{/* Title and tag row */}
				<div className="flex justify-between items-start">
					<div className="flex items-center gap-2">
						<h3 className="text-xl font-bold text-secondary">
							{snippet.title}
						</h3>
						{/* Show 'Pinned' badge if pinned */}
						{isPinned && (
							<span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent">
								Pinned
							</span>
						)}
					</div>
					{/* Snippet tag */}
					<span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
						{snippet.tag}
					</span>
				</div>

				{/* Description Section */}
				{snippet.description && (
					<div className="text-sm text-secondary/80 ">
						{/* Button to expand/collapse description */}
						<button
							onClick={toggleDescription}
							className="flex items-center gap-1 hover:text-accent transition-colors"
						>
							{isExpanded ? (
								<TbChevronUp className="text-accent" />
							) : (
								<TbChevronDown className="text-accent" />
							)}
							<span>Description</span>
						</button>
						{/* Show description if expanded */}
						{isExpanded && (
							<div className="mt-2 p-3 bg-primary/50 rounded-lg border border-accent/10">
								{snippet.description}
							</div>
						)}
					</div>
				)}

				{/* Editor Container */}
				<div className="rounded-lg overflow-hidden h-70 border border-accent/10 bg-[#071C21] relative">
					<Editor
						height="100%"
						language={snippet.language.toLowerCase()}
						theme="snippet-card-theme"
						value={snippet.code}
						beforeMount={setupEditor}
						options={{
							readOnly: true,
							minimap: { enabled: false },
							lineNumbers: "on",
							lineNumbersMinChars: 2,
							padding: { top: 10, bottom: 10 },
							contextmenu: false,
							folding: false,
							scrollBeyondLastLine: false,
							fontSize: 13,
							fontFamily: "'Fira Code', monospace",
							lineDecorationsWidth: 10,
							overviewRulerBorder: false,
							hideCursorInOverviewRuler: true,
							glyphMargin: false,
							renderLineHighlight: "gutter",
							scrollbar: {
								vertical: "hidden",
								horizontal: "hidden",
								handleMouseWheel: true,
							},
							renderWhitespace: "none",
							guides: {
								indentation: true,
								highlightActiveIndentation: true,
							},
							wordWrap: "on",
							automaticLayout: true,
						}}
						loading={
							<div className="h-full flex items-center justify-center bg-[#071C21] text-secondary/50">
								Loading code...
							</div>
						}
					/>
				</div>

				{/* Action buttons: Copy and Pin */}
				<div className="flex justify-between items-center text-sm text-secondary/80">
					{/* Copy code button */}
					<button
						onClick={handleCopyCode}
						className="border-2 flex items-center gap-1 justify-center border-accent px-4 py-2 rounded-full hover:bg-accent/10 transition-colors group/copy"
					>
						<TbClipboard className="group-hover/copy:scale-110 transition-transform" />
						<span>Copy Code</span>
					</button>
					{/* Pin/unpin button */}
					<button
						onClick={() => togglePin(snippet.id)}
						className={`p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-accent/10 ${
							isPinned
								? "text-accent hover:text-accent/80"
								: "text-accent/40 hover:text-accent/60"
						}`}
						aria-label={
							isPinned ? "Unpin snippet" : "Pin snippet"
						}
					>
						{isPinned ? (
							<RiPushpinFill className="text-lg" />
						) : (
							<RiPushpinLine className="text-lg" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default SnippetCard;
