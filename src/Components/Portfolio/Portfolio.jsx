import {Header} from "../Header/Header.jsx";
import {Home} from "../Home/Home.jsx";
import {About} from "../About/About.jsx";
import {Skills} from "../Skills/Skills.jsx";
import {Contact} from "../Contact/Contact.jsx";
import {Footer} from "../Footer/Footer.jsx";
import {useContext} from "react";
import {AuthContext} from "../../context/authContext.jsx";
import {Button_icon_1} from "../Button_icon_1/Button_icon_1.jsx";
function Portfolio() {
    const {showHome , showAbout , showSkills , showContact} = useContext(AuthContext)
    
    return (
        <>
            <Header/>
            <main className="main">
                {showHome && <Home/>}
                {showAbout && <About/>}
                {showSkills && <Skills/>}
                {showContact && <Contact/>}
                <Footer/>
            </main>
        </>
    )
}

export default Portfolio