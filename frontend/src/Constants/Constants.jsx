// In your Constants/Constants.js
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdDashboard, MdSnippetFolder, MdStar } from "react-icons/md";
import { RiPushpinFill } from "react-icons/ri";
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
		link: "/snippet",
		icon: <MdSnippetFolder className="inline-block mr-2" />,
	},
	{
		text: "Pinned Frag",
		link: "/pin",
		icon: <RiPushpinFill className="inline-block mr-2" />,
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

export const testSnippets = [
	{
		id: 1,
		title: "useFetch Hook",
		tag: "React",
		language: "javascript",
		code: `import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;`,
		search: ["hooks", "api", "fetch"],
	},
	{
		id: 2,
		title: "Dark Mode Toggle",
		tag: "React",
		language: "javascript",

		code: `import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;`,
		search: ["hooks", "theme", "localstorage"],
	},
	{
		id: 3,
		title: "Debounce Function",
		tag: "JavaScript",
		language: "javascript",

		code: `const debounce = (func, delay) => {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};`,
		search: ["utility", "performance"],
	},
	{
		id: 4,
		title: "Form Validation",
		tag: "React",
		language: "javascript",

		code: `import { useState } from 'react';

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      callback(values);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  };
};`,
		search: ["hooks", "forms", "validation"],
	},
	{
		id: 5,
		title: "TypeScript Interface",
		tag: "TypeScript",
		language: "typescript",

		code: `interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

function greetUser(user: User): string {
  return \`Hello \${user.name}!\`;
}`,
		search: ["typescript", "interface", "types"],
	},
	{
		id: 6,
		title: "Python Flask Route",
		tag: "Python",
		language: "python",

		code: `from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/users', methods=['GET'])
def get_users():
    users = [
        {'id': 1, 'name': 'Alice'},
        {'id': 2, 'name': 'Bob'}
    ]
    return jsonify(users)`,
		search: ["python", "flask", "api"],
	},
	{
		id: 7,
		title: "CSS Grid Layout",
		tag: "CSS",
		language: "css",

		code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.header {
  grid-column: 1 / -1;
}`,
		search: ["css", "grid", "layout"],
	},
	{
		id: 8,
		title: "SQL Query",
		tag: "SQL",
		language: "sql",

		code: `SELECT 
  u.username,
  COUNT(p.id) AS post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id
HAVING post_count > 5
ORDER BY post_count DESC;`,
		search: ["sql", "database", "query"],
	},
];
