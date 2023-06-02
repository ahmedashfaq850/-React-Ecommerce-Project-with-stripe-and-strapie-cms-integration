import { createContext } from "react";

// Create Context
export const Context = createContext()

// Create Provider
const AppContext = ({ children }) => {
    return <Context.Provider>{children}</Context.Provider>
}

export default AppContext;