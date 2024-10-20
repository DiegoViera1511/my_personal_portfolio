
import "./home.css"
import {Social} from "./Social.jsx";
import {Presentation} from "./Presentation.jsx";
export function Home(){
    return(
        <section id="home">
            <Social />
            <Presentation />
            <img className="home_photo" src="src/assets/Images/IMG_2607.JPG" alt="home_img"/>
        </section>
    )
}