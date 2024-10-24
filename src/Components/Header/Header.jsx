import "./header.css"

export function Header() {
    return (
        <header className="header">
            <nav className="nav_container">
                <a href="#home" className="nav_logo">
                    <img src="src/assets/Images/Viera_Logo.png"/>
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
                            <a href="src/assets/CV_Diego_Viera.pdf" className="nav_menu_list_item_link" download="CV_Diego_Viera.pdf">
                                <i className="nav_menu_list_item_icon"></i> CV
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}