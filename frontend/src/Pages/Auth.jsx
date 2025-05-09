import { useContext, useState } from "react";
import { FiLogIn, FiUserPlus, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Context } from "../Contexts/Context";

const Auth = () => {
	// Accessing the context to determine if the user is in login or signup mode
	const { isLogin, setIsLogin } = useContext(Context);

	// State to manage form input values
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	// Function to toggle between login and signup modes
	const toggleAuthMode = () => setIsLogin(!isLogin);

	// Function to handle input changes and update state
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// Placeholder for authentication logic
		console.log(formData);
	};

	return (
		<section className="min-h-screen py-12 px-4">
			{/* Container for the form */}
			<div className="max-w-md mx-auto border-2 border-secondary text-secondary rounded-3xl shadow-lg overflow-hidden p-8">
				{/* Header Section */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-accent mb-2">
						{/* Display different headers based on login/signup mode */}
						{isLogin
							? "Welcome Back to VexCode"
							: "Join the VexCode Community"}
					</h1>
					<p className="text-secondary/90 text-sm">
						{/* Display different subtext based on login/signup mode */}
						{isLogin
							? "Warning: May cause sudden bursts of productivity!"
							: "The only thing you'll lose track of is how much time you're saving."}
					</p>
				</div>

				{/* Form Section */}
				<form onSubmit={handleSubmit} className="space-y-5">
					{/* Show username field only in signup mode */}
					{!isLogin && (
						<div className="relative">
							{/* Username input with icon */}
							<FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
							<input
								type="text"
								name="username"
								placeholder="Username"
								className="w-full pl-10 pr-4 py-2 bg-primary border-b-2 border-accent focus:outline-none text-secondary placeholder-secondary/60"
								onChange={handleChange}
							/>
						</div>
					)}

					{/* Email input field */}
					<div className="relative">
						<FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="w-full pl-10 pr-4 py-2 bg-primary border-b-2 border-accent focus:outline-none text-secondary placeholder-secondary/60"
							onChange={handleChange}
						/>
					</div>

					{/* Password input field */}
					<div className="relative">
						<FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="w-full pl-10 pr-4 py-2 bg-primary border-b-2 border-accent focus:outline-none text-secondary placeholder-secondary/60"
							onChange={handleChange}
						/>
					</div>

					{/* Submit button */}
					<button
						type="submit"
						className="w-full bg-accent text-primary py-3 rounded-full font-bold hover:bg-accent/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
					>
						{/* Display different button text/icons based on login/signup mode */}
						{isLogin ? (
							<>
								<FiLogIn />
								Unlock Your Snippets
							</>
						) : (
							<>
								<FiUserPlus />
								Become a 10x Developer
							</>
						)}
					</button>
				</form>

				{/* Toggle between login and signup modes */}
				<div className="mt-6 text-center text-sm text-secondary/80">
					{/* Display different toggle text based on login/signup mode */}
					{isLogin
						? "New to VexCode?"
						: "Already part of the VexCode community?"}
					<button
						type="button"
						onClick={toggleAuthMode}
						className="font-semibold text-accent hover:underline"
					>
						{/* Toggle button text */}
						{isLogin ? "Sign up here" : "Log in here"}
					</button>
				</div>

				{/* Footer with fun messages */}
				<p className="text-xs text-center mt-8 text-secondary/70">
					{isLogin
						? "By logging in, you agree to stop pretending you remember all your code."
						: "Signing up means you'll never lose that brilliant 2AM function again."}
				</p>
			</div>
		</section>
	);
};

export default Auth;
