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

export const landingSnippets = [
	{
		title: "React Custom Hook (useFetch)",
		language: "javascript",
		code: `import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
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
		description: "A reusable fetch hook for API calls",
	},
	{
		title: "Debounce Function",
		language: "javascript",
		code: `const debounce = (func, delay) => {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// Usage example:
// const handleSearch = debounce((query) => {
//   console.log('Searching for:', query);
// }, 300);`,
		description: "Optimize performance by delaying expensive operations",
	},
	{
		title: "Dark Mode Toggle",
		language: "javascript",
		code: `import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true' || 
      (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', isDark);
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return [isDark, toggle];
};

export default useDarkMode;`,
		description:
			"Persistent dark mode toggle with system preference detection",
	},
];

export const testSnippets = [
	{
		id: 1,
		title: "useFetch Hook",
		tag: "React",
		language: "javascript",
		description:
			"A reusable React hook for handling API requests with built-in loading and error states. Perfect for data fetching in functional components.",
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
		description:
			"Persistent dark mode hook that remembers user preference in localStorage and respects system settings. Automatically applies dark class to document.",
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
		description:
			"Optimize performance by delaying function execution until after a certain wait time has elapsed since the last call. Essential for search inputs and resize handlers.",
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
		description:
			"Custom hook for form validation with support for field validation on blur and form submission. Returns validation errors and submission state.",
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
		description:
			"Basic Flask API endpoint that returns JSON data. Demonstrates route definition and JSON response formatting.",
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
		description:
			"SQL query that counts posts per user and filters for active users. Demonstrates JOIN, GROUP BY, and HAVING clauses.",
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
