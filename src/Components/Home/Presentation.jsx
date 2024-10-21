import "./home.css"
import {Button_icon_1} from "../Button_icon_1/Button_icon_1.jsx";
export function Presentation(){
    return(
        <div className="presentation_container">
            <h1 className="presentation_name">Diego Viera</h1>
            <h2 className="presentation_vocation">&lt; Computer Scientist /&gt;</h2>
            <p className="presentation_text">
                I`m a passionate computer scientist ready to contribute my creativity <br/>
                to new projects and challenges.
            </p>
            <a href="#contact">
                <Button_icon_1 text="Say Hello !" icon="uil uil-message"/>
            </a>

        </div>

    )
}