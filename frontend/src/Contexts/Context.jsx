import React, { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider(props) {
	const [user, setUser] = useState(true);
	const value = {};

	return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default ContextProvider;
