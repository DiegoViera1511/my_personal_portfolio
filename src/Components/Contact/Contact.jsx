import "./contact.css"
import {Contact_Card} from "./Contact_Card/Contact_Card.jsx";
export function Contact(){
    return (
        <section id="contact" className="contact_section">
            <h1 className="section_title">Contact Me</h1>

            <h2 className="section_subtitle">&lt; Tell me about your projects /&gt;</h2>
            
            <Contact_Card />
        </section>
    )
}