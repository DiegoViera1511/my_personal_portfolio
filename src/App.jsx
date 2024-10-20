import {Header} from "./Components/Header/Header.jsx";
import {Home} from "./Components/Home/Home.jsx";
import {About} from "./Components/About/About.jsx";
import "./App.css"
function App() {
  return (
      <>
          <Header />
          <main className="main">
              <Home />
              <About />
          </main>
      </>
  ) 
}

export default App
