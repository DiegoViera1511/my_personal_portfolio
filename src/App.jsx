import "./App.css"
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LogIn} from "./Components/LogIn/LogIn.jsx";
import {Register} from "./Components/Register/Register.jsx";
import {AuthProvider} from "./context/authContext.jsx";
import {Portfolio_configuration} from "./Components/Portfolio_configuration/Portfolio_configuration.jsx";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Portfolio/>}/>

                    <Route path='/logIn' element={<LogIn/>}/>

                    <Route path='/register' element={<Register/>}/>

                    <Route path='/portfolio' element={<Portfolio/>}/>
                    
                    <Route path='/config' element={<Portfolio_configuration/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
