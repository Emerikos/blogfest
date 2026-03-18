import { createContext } from "react"

//stage one: create a context
export const AppNameContext = createContext();

//stage two: create a provider, a super component that can provide any component that is it's child with whatever it has
export const AppNameProvider = ({children})=>{
    const appName = "Invento Application"
    return (<AppNameContext.Provider value={{appName}}>
            {children}
        </AppNameContext.Provider>)
}