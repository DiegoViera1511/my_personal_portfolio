import {Button_icon_1} from "../Button_icon_1/Button_icon_1.jsx";
import {Enabler} from "./Enabler/Enabler.jsx";
import {useContext} from "react";
import {AuthContext} from "../../context/authContext.jsx";
import "./portfolio_configuration.css"
import {Link, Navigate} from "react-router-dom";

export function Portfolio_configuration() {
    const {
        isAuth,
        showHome,
        setShowHome,
        showAbout,
        setShowAbout,
        showSkills,
        setShowSkills,
        showContact,
        setShowContact,
    } = useContext(AuthContext)
    if (!isAuth){
        return <Navigate to={"/portfolio"}/>
    }
    return (
        <section id={"Config"}>
            <h1>Settings</h1>
            <div className={"config_container"}>
                <Enabler show={showHome} enabler_name={"Home"} setShow={setShowHome}/>
                <Enabler show={showAbout} enabler_name={"About"} setShow={setShowAbout}/>
                <Enabler show={showSkills} enabler_name={"Skills"} setShow={setShowSkills}/>
                <Enabler show={showContact} enabler_name={"Contact"} setShow={setShowContact}/>
            </div>
            
            <Link to="/portfolio"><Button_icon_1 text="Close"/></Link>
            
        </section>
    )
}