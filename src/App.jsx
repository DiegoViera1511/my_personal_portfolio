import "./App.css"
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LogIn} from "./Components/LogIn/LogIn.jsx";
import {Register} from "./Components/Register/Register.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LogIn/>}/>

                <Route path='/logIn' element={<LogIn/>}/>

                <Route path='/register' element={<Register/>}/>

                <Route path='/portfolio' element={<Portfolio/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
