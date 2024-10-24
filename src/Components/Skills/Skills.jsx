import "./skills.css"
import {Skills_Mosaic} from "../Skills_Mosaic/Skills_Mosaic.jsx";
export function Skills(){
    return(
        <section id="skills" className="skills_section">
            <h1 className="section_title">Skills</h1>
            
            <h2 className="section_subtitle">&lt; Tools and Technology /&gt;</h2>
            
            <Skills_Mosaic />
        </section>
    )
}