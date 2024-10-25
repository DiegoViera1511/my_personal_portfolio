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
                Hello! My name is Diego Manuel Viera Martínez, and I am a Computer Science student passionate about software development and technology. My native language is Spanish, and I am always looking for new opportunities to learn and grow in the programming world.
                <br/><br/>
                I am a big fan of Apple and love to explore their technologies and ecosystems. I also have a strong interest in game development, where I can apply my creativity and technical skills. I enjoy participating in collaborative projects, where I can use my knowledge and acquire new skills. I am particularly interested in areas such as artificial intelligence, web development, and systems programming.
                <br/><br/>
                My hobbies include creating pixel art and going to the gym to stay healthy and fit. These activities help me stay creative and balanced. I am excited to contribute to open-source projects and collaborate with other technology enthusiasts.
                <br/><br/>
                If you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
            
            <a className="cv_link" href="src/assets/CV_Diego_Viera.pdf" download="CV_Diego_Viera.pdf">
                <Button_icon_1  text="Download CV" icon="uil uil-file-alt"/>
            </a>
        </section>
    )
}