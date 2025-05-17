import React, { useState, useRef, useEffect, useContext } from "react";
import {
	FiSave,
	FiX,
	FiTag,
	FiCode,
	FiChevronDown,
	FiMaximize,
	FiMinimize,
} from "react-icons/fi";
import { TitleCard } from "../Components";
import Editor from "@monaco-editor/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Context } from "../Contexts/Context";

const SnippetDetails = () => {
	const { customStyles, languageOptions } = useContext(Context);
	const [code, setCode] = useState("// Start coding here...");
	const [language, setLanguage] = useState(languageOptions[0]);
	const [title, setTitle] = useState("");
	const [tags, setTags] = useState("");
	const [description, setDescription] = useState("");
	const [isFullscreen, setIsFullscreen] = useState(false);
	const editorRef = useRef(null);

	const animatedComponents = makeAnimated();

	// Enhanced Monaco theme configuration
	const setupEditor = (monaco) => {
		monaco.editor.defineTheme("vexcode-pro", {
			base: "vs-dark",
			inherit: true,
			rules: [
				{
					token: "keyword",
					foreground: "C6DE41",
					fontStyle: "bold",
				},
				{ token: "string", foreground: "F4EBD0" },
				{ token: "number", foreground: "C6DE41" },
				{ token: "type", foreground: "C6DE41" },
				{
					token: "comment",
					foreground: "6B7280",
					fontStyle: "italic",
				},
				{ token: "delimiter", foreground: "F4EBD0" },
				{ token: "operator", foreground: "C6DE41" },
			],
			colors: {
				"editor.background": "#071C21",
				"editor.foreground": "#F4EBD0",
				"editor.lineHighlightBackground": "#0A252D",
				"editor.lineHighlightBorder": "#0A252D",
				"editorCursor.foreground": "#C6DE41",
				"editor.selectionBackground": "#C6DE4130",
				"editor.selectionHighlightBackground": "#C6DE4120",
				"editor.lineNumbers": "#F4EBD060",
				"editorGutter.background": "#071C21",
				"editorIndentGuide.background": "#F4EBD020",
				"editorIndentGuide.activeBackground": "#F4EBD040",
				"editorBracketMatch.background": "#C6DE4120",
				"editorBracketMatch.border": "#C6DE4160",
				"editorSuggestWidget.background": "#0A252D",
				"editorSuggestWidget.selectedBackground": "#C6DE4120",
			},
		});
	};

	const handleEditorDidMount = (editor) => {
		editorRef.current = editor;
		monaco.editor.setTheme("vexcode-pro");
		// Add a keyboard shortcut for formatting (Ctrl+S/Cmd+S)
		editor.addCommand(
			monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
			handleFormat
		);
	};

	const handleFormat = () => {
		editorRef.current?.getAction("editor.action.formatDocument").run();
		toast.success("Code formatted!");
	};

	const toggleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
		setTimeout(() => {
			editorRef.current?.layout();
		}, 0);
	};

	const handleCancel = () => {
		if (
			code.trim() !== "// Start coding here..." ||
			title.trim() !== ""
		) {
			if (confirm("Are you sure you want to discard this snippet?")) {
				resetForm();
			}
		} else {
			resetForm();
		}
	};

	const resetForm = () => {
		setTitle("");
		setTags("");
		setDescription("");
		setCode("// Start coding here...");
		setLanguage(languageOptions[0]);
	};

	return (
		<section>
			<div className="container mx-auto px-4 max-w-4xl">
				{/* Header */}
				<div className="pb-20">
					<TitleCard title={"New Snippet"} />
				</div>
				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
					<div className="flex gap-4">
						<button
							onClick={handleCancel}
							className="px-6 py-3 rounded-full border-2 border-secondary/20 hover:border-secondary/40 flex items-center gap-2 transition-all cursor-pointer hover:bg-secondary/5"
						>
							<FiX /> Cancel
						</button>
						<button
							className="px-6 py-3 rounded-full bg-accent text-primary font-bold hover:bg-accent/90 flex items-center gap-2 transition-all hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-accent/20"
							onClick={() =>
								toast.success("Snippet saved!")
							} // Replace with actual save logic
						>
							<FiSave /> Save Snippet
						</button>
					</div>
				</div>

				{/* Form */}
				<div className="space-y-8">
					<div>
						<label className="block mb-3 font-bold text-lg text-secondary">
							Title
						</label>
						<input
							type="text"
							className="w-full p-4 rounded-2xl border-2 border-accent/50 focus:border-accent focus:outline-none transition-all duration-300 bg-primary/50 text-secondary placeholder-secondary/60"
							placeholder="e.g. Custom fetch hook"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block mb-3 font-bold text-lg text-secondary">
								Language
							</label>
							<Select
								components={{
									...animatedComponents,
									DropdownIndicator: () => (
										<FiChevronDown className="mr-3 text-accent" />
									),
								}}
								options={languageOptions}
								value={language}
								onChange={(selected) =>
									setLanguage(selected)
								}
								styles={customStyles}
								isSearchable
								placeholder="Select language..."
								className="react-select-container"
								classNamePrefix="react-select"
							/>
						</div>
						<div>
							<label className="block mb-3 font-bold text-lg text-secondary">
								Tags
							</label>
							<div className="relative">
								<FiTag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" />
								<input
									type="text"
									className="w-full pl-12 p-4 rounded-2xl border-2 border-accent/50 focus:border-accent focus:outline-none bg-primary/50 text-secondary placeholder-secondary/60 transition-all duration-300"
									placeholder="react, hooks, utility"
									value={tags}
									onChange={(e) =>
										setTags(e.target.value)
									}
								/>
							</div>
						</div>
					</div>

					<div>
						<label className="block mb-3 font-bold text-lg text-secondary">
							Description{" "}
							<span className="text-accent/40">
								(optional)
							</span>
						</label>
						<textarea
							className="w-full p-4 rounded-2xl text-secondary placeholder:text-secondary/60 border-2 border-accent/50 focus:border-accent focus:outline-none min-h-[120px] bg-primary/50 resize-y transition-all duration-300"
							placeholder="What does this snippet do? Any special instructions?"
							value={description}
							onChange={(e) =>
								setDescription(e.target.value)
							}
						/>
					</div>

					<div>
						<div className="flex justify-between items-center mb-3">
							<label className="font-bold text-lg text-secondary">
								Code Editor
							</label>
							<div className="flex gap-3">
								{/* Format Button */}
								<button
									onClick={handleFormat}
									className="text-accent flex items-center gap-2 font-medium hover:text-accent/80 transition-colors"
								>
									<FiCode /> Format
								</button>

								{/* Fullscreen Toggle Button - ADD THIS */}
								<button
									onClick={toggleFullscreen}
									className="text-accent flex items-center gap-2 font-medium hover:text-accent/80 transition-colors"
								>
									{isFullscreen ? (
										<>
											<FiMinimize /> Exit
											Fullscreen
										</>
									) : (
										<>
											<FiMaximize /> Fullscreen
										</>
									)}
								</button>
							</div>
						</div>
						<div
							className={`rounded-2xl overflow-hidden border-2 border-accent/30 focus-within:border-accent transition-all duration-300 ${
								isFullscreen
									? "fixed inset-0 z-50 bg-[#071C21] p-4 flex flex-col"
									: "h-[500px]"
							}`}
						>
							{/* Add header bar in fullscreen mode */}
							{isFullscreen && (
								<div className="flex justify-end items-center mb-4 px-2">
									<div className="flex gap-3">
										<button
											onClick={handleFormat}
											className="text-accent flex items-center gap-2 font-medium hover:text-accent/80 transition-colors"
										>
											<FiCode /> Format
										</button>
										<button
											onClick={
												toggleFullscreen
											}
											className="text-accent flex items-center gap-2 font-medium hover:text-accent/80 transition-colors"
										>
											<FiMinimize /> Exit
										</button>
									</div>
								</div>
							)}
							<Editor
								height="100%"
								language={language.value}
								theme="vexcode-pro"
								value={code}
								onChange={setCode}
								beforeMount={setupEditor}
								onMount={handleEditorDidMount}
								options={{
									minimap: { enabled: false },
									fontSize: 14,
									fontFamily:
										"'Fira Code', monospace",
									fontWeight: "400",
									wordWrap: "on",
									automaticLayout: true,
									scrollBeyondLastLine: false,
									padding: { top: 20, bottom: 20 },
									lineNumbersMinChars: 3,
									renderLineHighlight: "gutter",
									glyphMargin: false,
									folding: true,
									lineDecorationsWidth: 12,
									overviewRulerBorder: false,
									scrollbar: {
										vertical: "auto",
										horizontal: "auto",
										handleMouseWheel: true,
									},
									renderWhitespace: "selection",
									guides: {
										indentation: true,
										highlightActiveIndentation: true,
									},
									bracketPairColorization: {
										enabled: true,
										independentColorPool: true,
									},
									suggest: {
										preview: true,
									},
									tabSize: 2,
								}}
								loading={
									<div className="h-full flex items-center justify-center bg-[#071C21] text-secondary/50">
										Loading editor...
									</div>
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SnippetDetails;
