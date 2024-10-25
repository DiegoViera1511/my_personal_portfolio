import {Header} from "./Components/Header/Header.jsx";
import {Home} from "./Components/Home/Home.jsx";
import {About} from "./Components/About/About.jsx";
import "./App.css"
import {Skills} from "./Components/Skills/Skills.jsx";
import {Contact} from "./Components/Contact/Contact.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
function App() {
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

export default App
