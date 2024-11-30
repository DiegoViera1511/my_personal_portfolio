import {useState} from "react";
import "./on-Off-Toggle.css"
export function OnOffToggle({onClickFunc , state}){
    const [toggled , setToggled] = useState(state)
    const handleClick = () => {
        onClickFunc()
        setToggled(!toggled)
    }
    return(
        <button
            className={`toggle-button ${toggled ? 'toggled' : ''}`}
            onClick={() => handleClick()}
        >
            <div className="thumb"></div>
        </button>
    )
}