import "./about.css"
import {Button_icon_1} from "../Button_icon_1/Button_icon_1.jsx";
import {Icon_Store} from "../Icons_Store/Icon_Store.jsx";
export function About(){
    return(
        <section id="about" className="about_section">
            <h1 className="section_title">About Me</h1>
            
            <h2 className="section_subtitle">&lt; My Introduction /&gt;</h2>
            
            <Icon_Store />
            
            <p className="about_text">
                My name is Diego Manuel Viera Martínez, a computer scientist graduated from the<br/>
                University of Havana in Cuba. My native language is Spanish, but I also speak English.<br/>
                Passionate about full stack web development, artificial intelligence, and game development,<br/>
                I constantly seek to enhance my skills by learning new technologies. Working on data<br/>
                structures helps improve my efficiency. Creativity is always a focus, and my dream is to<br/>
                create something that improves everyone’s life.
            </p>
            
            <a className="cv_link" href="src/assets/CV_Diego_Viera.pdf" download="CV_Diego_Viera.pdf">
                <Button_icon_1  text="Download CV" icon="uil uil-file-alt"/>
            </a>
        </section>
    )
}