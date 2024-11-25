import {createContext, useState} from "react";

export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const [isAuth , setIsAuth] = useState(false)
    const [showHome , setShowHome] = useState(true)
    const [showAbout , setShowAbout] = useState(true)
    const [showSkills , setShowSkills] = useState(true)
    const [showContact , setShowContact] = useState(true)
    return(
        <AuthContext.Provider 
            value={{
                isAuth,
                setIsAuth,
                showHome,
                setShowHome,
                showAbout,
                setShowAbout,
                showSkills,
                setShowSkills,
                showContact,
                setShowContact,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}