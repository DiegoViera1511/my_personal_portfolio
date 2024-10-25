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
                My name is Diego Manuel Viera Martinez, and I am a Computer Science. I studied at the
                University of Havana, where I developed a solid foundation in various aspects of computing.
                My native language is Spanish, but I am also proficient in English, which enables me to engage with a
                wider community in the tech field.
                <br/><br/>
                I am interested in Full Stack web development, mobile application, artificial
                intelligence, and video games development. I am passionate about learning new technologies and tools that
                enhance my productivity, as well as exploring data structures that improve my programming skills.
                <br/><br/>
                If you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>

            <a className="cv_link" href="/CV_Diego_Viera.pdf" download="CV_Diego_Viera.pdf">
                <Button_icon_1  text="Download CV" icon="uil uil-file-alt"/>
            </a>
        </section>
    )
}