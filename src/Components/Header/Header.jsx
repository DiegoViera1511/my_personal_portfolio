import "./header.css"
import {Navigate} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/authContext.jsx";
import {LogIn} from "../LogIn/LogIn.jsx";

export function Header() {
    const [redirect, setRedirect] = useState(false)
    
    const {isAuth , setIsAuth , showHome , showAbout , showSkills , showContact} = useContext(AuthContext)
    const handleLog = () => {
        if (isAuth){
            localStorage.removeItem("jwt");
            setIsAuth(false)
        }
        else {
            setRedirect(true)
        }
    }
    if (redirect) {
        return <Navigate to={'/logIn'}/>
    }
    return (
        <header className="header">
            <nav className="nav_container">
                <a href="#home" className="nav_logo">
                    <img src="/Images/Viera_Logo.png"/>
                </a>

                <div className="nav_menu">
                    <ul className="nav_menu_list">
                        {
                            showHome &&
                            <li className="nav_menu_list_item">
                                <a href="#home" className="nav_menu_list_item_link">
                                    <i className="nav_menu_list_item_icon"></i> Home
                                </a>
                            </li>
                        }

                        {
                            showAbout &&
                            <li className="nav_menu_list_item">
                                <a href="#about" className="nav_menu_list_item_link">
                                    <i className="nav_menu_list_item_icon"></i> About
                                </a>
                            </li>
                        }
                        {
                            showSkills &&
                            <li className="nav_menu_list_item">
                                <a href="#skills" className="nav_menu_list_item_link">
                                    <i className="nav_menu_list_item_icon"></i> Skills
                                </a>
                            </li>
                        }
                        {
                            showContact &&
                            <li className="nav_menu_list_item">
                                <a href="#contact" className="nav_menu_list_item_link">
                                    <i className="nav_menu_list_item_icon"></i> Contact
                                </a>
                            </li>
                        }
                        <li className="nav_menu_list_item">
                            <button className="log_out_button" onClick={handleLog}>
                                {isAuth ? "Log out" : "Log in"}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}