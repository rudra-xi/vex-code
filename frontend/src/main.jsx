import ContextProvider from "./Contexts/context.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ContextProvider>
			<App />
		</ContextProvider>
	</BrowserRouter>
);
