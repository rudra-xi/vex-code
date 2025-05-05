// In your Constants/Constants.js
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdDashboard, MdSnippetFolder } from "react-icons/md";
import { LiaConnectdevelop } from "react-icons/lia";
import {
	FiShare2,
	FiEdit,
	FiSave,
	FiCopy,
	FiSearch,
	FiCode,
} from "react-icons/fi";

export const navLinks = [
	{
		text: "Dashboard",
		link: "/dashboard",
		icon: <MdDashboard className="inline-block mr-2" />,
	},
	{
		text: "New Snippet",
		link: "/editor",
		icon: <MdSnippetFolder className="inline-block mr-2" />,
	},
];

export const footerLinks = [
	{
		text: "Privacy Policy",
		link: "/privacy",
	},
	{
		text: "Terms of Service",
		link: "/terms",
	},
	{
		text: "Contact",
		link: "/contact",
	},
];

export const footerSocialLinks = [
	{
		name: "GitHub",
		icon: <FaGithub />,
		link: "https://github.com/rudra-xi",
	},
	{
		name: "LinkedIn",
		icon: <FaLinkedin />,
		link: "https://www.linkedin.com/in/goutam-rudraxi",
	},
	{
		name: "Instagram",
		icon: <FaInstagram />,
		link: "https://www.instagram.com/rudra.xii/",
	},
	{
		name: "Portfolio",
		icon: <LiaConnectdevelop />,
		link: "https://rudra-xi-protfolio.netlify.app/",
	},
];

export const landingFeatures = [
	{
		title: "Save Code Snippets",
		subtitle: "Organize your personal library",
		description:
			"Store your most-used code fragments in one searchable place. Never lose that perfect solution again.",
		icon: <FiSave className="text-4xl text-accent" />,
	},
	{
		title: "Quick Copy-Paste",
		subtitle: "Reuse code instantly",
		description:
			"One-click copy your saved snippets directly into your projects. No more digging through old repos.",
		icon: <FiCopy className="text-4xl text-accent" />,
	},
	{
		title: "Edit & Update",
		subtitle: "Keep snippets current",
		description:
			"Easily modify saved code to match your latest standards and frameworks.",
		icon: <FiEdit className="text-4xl text-accent" />,
	},
	{
		title: "Share with Team",
		subtitle: "Collaborate efficiently",
		description:
			"Send snippets to teammates with a single link. Perfect for onboarding or pair programming.",
		icon: <FiShare2 className="text-4xl text-accent" />,
	},
	{
		title: "Powerful Search",
		subtitle: "Find code instantly",
		description:
			"Filter by language, tags, or keywords to locate any snippet in seconds.",
		icon: <FiSearch className="text-4xl text-accent" />,
	},
	{
		title: "VS Code-like Editor",
		subtitle: "Edit with familiar tools",
		description:
			"Write and test snippets in a feature-rich editor with syntax highlighting and autocomplete.",
		icon: <FiCode className="text-4xl text-accent" />,
	},
];
