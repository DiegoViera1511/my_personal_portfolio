import "./about.css"
import {Button_icon_1} from "../Button_icon_1/Button_icon_1.jsx";

export function About(){
    return(
        <section id="about" className="about_section">
            <h1 className="section_title">About Me</h1>
            
            <h2 className="section_subtitle">&lt; My Introduction /&gt;</h2>
            
            <div className="about_content">
                <img className="about_photo" src="src/assets/Images/IMG_2607.JPG" alt="about_img"/>
                <p className="about_text">
                    Hello! My name is Diego Manuel Viera Martínez, a computer scientist graduated from the<br/>
                    University of Havana in Cuba. My native language is Spanish, but I also speak English.<br/>
                    Passionate about full stack web development, artificial intelligence, and game development,<br/>
                    I constantly seek to enhance my skills by learning new technologies. Working on data<br/>
                    structures helps improve my efficiency. Creativity is always a focus, and my dream is to<br/>
                    create something that improves everyone’s life.
                </p>
            </div>
            <a className="cv_link" href="" download="">
                <Button_icon_1  text="Download CV" icon="uil uil-file-alt"/>
            </a>
        </section>
    )
}