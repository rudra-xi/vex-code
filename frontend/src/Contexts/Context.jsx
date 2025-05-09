import React, { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider(props) {
	const [isLogin, setIsLogin] = useState(false);
	const value = { isLogin, setIsLogin };

	return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default ContextProvider;
