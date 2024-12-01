import {createContext, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage.js";

export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const [isAuth , setIsAuth] = useState(false)
    const [showHome , setShowHome] = useLocalStorage("Home",true)
    const [showAbout , setShowAbout] = useLocalStorage("About",true)
    const [showSkills , setShowSkills] = useLocalStorage("Skills",true)
    const [showContact , setShowContact] = useLocalStorage("Contact",true)
    
    const fetchToken = async () => {
        const token = localStorage.getItem('jwt')
        console.log(token)
        if (token) {
            const response = await fetch(
                'https://backendprotfolio-production.up.railway.app/api/protected', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
            if (response.status === 200) {
                setIsAuth(true)
            }
        }
    }
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
                fetchToken
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}