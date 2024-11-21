import "./header.css"
import {Navigate} from "react-router-dom";
import {useState} from "react";

export function Header() {
    const [redirect, setRedirect] = useState(false)
    const logOut = () => {
        localStorage.removeItem("jwt");
        setRedirect(true);
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
                        <li className="nav_menu_list_item">
                            <a href="#home" className="nav_menu_list_item_link">
                                <i className="nav_menu_list_item_icon"></i> Home
                            </a>
                        </li>

                        <li className="nav_menu_list_item">
                            <a href="#about" className="nav_menu_list_item_link">
                                <i className="nav_menu_list_item_icon"></i> About
                            </a>
                        </li>

                        <li className="nav_menu_list_item">
                            <a href="#skills" className="nav_menu_list_item_link">
                                <i className="nav_menu_list_item_icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav_menu_list_item">
                            <a href="#contact" className="nav_menu_list_item_link">
                                <i className="nav_menu_list_item_icon"></i> Contact
                            </a>
                        </li>

                        <li className="nav_menu_list_item">
                            <button className="log_out_button" onClick={logOut}>Log out</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}