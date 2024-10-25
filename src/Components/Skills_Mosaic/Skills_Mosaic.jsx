import "./skills_mosaic.css"
import {useEffect} from "react";

export function Skills_Mosaic() {
    useEffect(()=>{
        function HandleHover (target){
            target.style.opacity = "1";
        }
        function HandleOut(target){
            target.style.opacity = "0";
        }
        function AddEvents(Elements_list){
            for (let i = 0 ; i < Elements_list.length - 1; i+=2) {
                Elements_list[i].addEventListener("mouseover", () => {HandleHover(Elements_list[i+1])});
                Elements_list[i].addEventListener("mouseout" , () => {HandleOut(Elements_list[i+1])});
            }
        }
        function RemoveEvents(Elements_list){
            for (let i = 0 ; i < Elements_list.length - 1; i++) {
                Elements_list[i].removeEventListener("mouseover", () => {HandleHover(Elements_list[i+1])});
                Elements_list[i].removeEventListener("mouseout" , () => {HandleOut(Elements_list[i+1])});
            }
        }
        const htmlHover = document.querySelector(".selected_html")
        const htmlTarget = document.querySelector(".text_html")
        const cssHover = document.querySelector(".selected_css")
        const cssTarget = document.querySelector(".text_css")
        const javascriptHover = document.querySelector(".selected_js")
        const javascriptTarget = document.querySelector(".text_js")
        const cHover = document.querySelector(".selected_c")
        const cTarget = document.querySelector(".text_c")
        const csHover = document.querySelector(".selected_cs")
        const csTarget = document.querySelector(".text_cs")
        const cppHover = document.querySelector(".selected_cpp")
        const cppTarget = document.querySelector(".text_cpp")
        const reactHover = document.querySelector(".selected_react")
        const reactTarget = document.querySelector(".text_react")
        const tailwindHover = document.querySelector(".selected_tailwind")
        const tailwindTarget = document.querySelector(".text_tailwind")
        const pythonHover = document.querySelector(".selected_python")
        const pythonTarget = document.querySelector(".text_python")
        const mysqlHover = document.querySelector(".selected_mysql")
        const mysqlTarget = document.querySelector(".text_mysql")
        const gitHover = document.querySelector(".selected_git")
        const gitTarget = document.querySelector(".text_git")
        const Mosaic_Element = [htmlHover,htmlTarget,cssHover,cssTarget,javascriptHover,javascriptTarget,
        cHover,cTarget,csHover,csTarget,cppHover,cppTarget,reactHover,reactTarget,tailwindHover,tailwindTarget,
        pythonHover,pythonTarget,mysqlHover,mysqlTarget,gitHover,gitTarget]
        
        AddEvents(Mosaic_Element)
        
        return () => {
            RemoveEvents(Mosaic_Element)
        }
    }, [])
    return (
        <div className="skills_mosaic_container">
           
                 <div className="skill_text">
                <p className="text_html">
                    HTML (HyperText Markup Language) is the standard language for creating web pages. Defines the
                    structure and content, using tags.
                </p>
                <p className="text_css">
                    CSS (Cascading Style Sheets) is a language used to describe the presentation of documents
                    HTML, controlling the design, colors and fonts.
                </p>
                <p className="text_js">
                    JavaScript is a programming language that allows creating interactivity in web pages, managing
                    events, manipulating the DOM and making requests.
                </p>
                <p className="text_cs">
                    C# is an object-oriented programming language from Microsoft, used in .NET development,
                    web applications, games and business software.
                </p>
                <p className="text_cpp">
                    C++ is a general-purpose, object-oriented programming language that provides control of
                    low level and efficiency in systems.
                </p>
                <p className="text_c">
                    C is a general-purpose, imperative, low-level programming language, widely
                    used for system and application development.
                </p>
            </div>
            
            <div className="icons_mosaic">
                <span>
                    <div className="M_icon selected_c">
                    <img src="/Icons/icons8-c-programing-96.png" alt="icon c"/>
                </div>
                <div className="M_icon selected_cs">
                    <img src="/Icons/icons8-c-sharp-logo-2-96.png" alt="icon cs"/>
                </div>
                </span>

                <span>
                    <div className="M_icon selected_cpp">
                    <img src="/Icons/icons8-logotipo-de-c-plus-plus-96.png" alt="icon cpp"/>
                </div>
                <div className="M_icon selected_git">
                    <img src="/Icons/icons8-git-96.png" alt="icon git"/>
                </div>
                <div className="M_icon selected_css">
                    <img src="/Icons/icons8-css3-96.png" alt="icon css"/>
                </div>
                <div className="M_icon selected_html">
                    <img src="/Icons/icons8-html-5-96.png" alt="icon html5"/>
                </div>
                </span>

                <span>
                    <div className="M_icon selected_js">
                    <img src="/Icons/icons8-javascript-96.png" alt="icon js"/>
                </div>
                <div className="M_icon selected_mysql">
                    <img src="/Icons/icons8-logo-de-mysql-96.png" alt="icon mysql"/>
                </div>
                <div className="M_icon selected_python">
                    <img src="/Icons/icons8-python-96.png" alt="icon python"/>
                </div>
                </span>

                <span>
                    <div className="M_icon selected_react">
                    <img src="/Icons/icons8-reaccionar-nativo-96.png" alt="icon react"/>
                </div>
                <div className="M_icon selected_tailwind">
                    <img src="/Icons/icons8-viento-de-cola-css-96.png" alt="icon tailwind"/>
                </div>
                </span>
            </div>

            <div className="skill_text">
                <p className="text_react">
                    React is a JavaScript library for building user interfaces, developed by
                    Facebook, which allows you to create interactive and efficient web applications.
                </p>
                <p className="text_tailwind">
                    Tailwind CSS is a utility-first CSS framework that allows you to create custom layouts
                    quickly, using predefined classes to easily style elements.
                </p>
                <p className="text_git">
                    Git is a distributed version control system that allows you to manage and track changes in the
                    project source code.
                </p>
                <p className="text_python">
                    Python is a high-level, interpreted, and versatile programming language used in
                    web development, data science and automation.
                </p>
                <p className="text_mysql">
                    MySQL is an open source relational database management system that uses SQL to
                    manage and consult data.
                </p>
            </div>
        </div>
    )
}