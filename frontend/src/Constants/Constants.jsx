// In your Constants/Constants.js
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdDashboard, MdSnippetFolder } from "react-icons/md";
import { LiaConnectdevelop } from "react-icons/lia";

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
