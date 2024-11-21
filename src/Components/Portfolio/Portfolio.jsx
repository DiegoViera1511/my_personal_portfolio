import {Header} from "../Header/Header.jsx";
import {Home} from "../Home/Home.jsx";
import {About} from "../About/About.jsx";
import {Skills} from "../Skills/Skills.jsx";
import {Contact} from "../Contact/Contact.jsx";
import {Footer} from "../Footer/Footer.jsx";
function Portfolio() {
    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Contact />
                <Footer />
            </main>
        </>
    )
}

export default Portfolio