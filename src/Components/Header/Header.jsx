import "./header.css"

export function Header() {
    return (
        <header className="header">
            
            <nav className="nav_container">
                <a href="" className="nav_logo">Viera</a>
                
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
                            <a href="#services" className="nav_menu_list_item_link">
                                <i className="nav_menu_list_item_icon"></i> Services
                            </a>
                        </li>

                        <li className="nav_menu_list_item">
                            <a href="#contact" className="nav_menu_list_item_link">
                                <i className="nav_menu_list_item_icon"></i> Contact
                            </a>
                        </li>

                        <li className="nav_menu_list_item">
                            <a href="#cv" className="nav_menu_list_item_link">
                                <i className="nav_menu_list_item_icon"></i> CV
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}