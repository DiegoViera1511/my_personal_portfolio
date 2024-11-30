import {Header} from "../Header/Header.jsx";
import {Home} from "../Home/Home.jsx";
import {About} from "../About/About.jsx";
import {Skills} from "../Skills/Skills.jsx";
import {Contact} from "../Contact/Contact.jsx";
import {Footer} from "../Footer/Footer.jsx";
import {useContext} from "react";
import {AuthContext} from "../../context/authContext.jsx";
import {Fix_button1} from "../Fix_Button1/Fix_button1.jsx";
import {Link} from "react-router-dom";
function Portfolio() {
    const {isAuth ,showHome , showAbout , showSkills , showContact} = useContext(AuthContext)
    
    return (
        <>
            <Header/>
            <main className="main">
                {isAuth && <Link to="/config"><Fix_button1 icon={"uil uil-setting"}/></Link>}
                {(showHome || isAuth) && <Home/>}
                {(showAbout || isAuth) && <About/>}
                {(showSkills || isAuth) && <Skills/>}
                {(showContact || isAuth) && <Contact/>}
                <Footer/>
            </main>
        </>
    )
}

export default Portfolio