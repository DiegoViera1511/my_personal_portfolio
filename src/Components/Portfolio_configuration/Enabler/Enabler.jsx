import "./enabler.css"
import {OnOffToggle} from "../../On-Off-Toggle/On-Off-Toggle.jsx";
export function Enabler({enabler_name , show , setShow}){
    const handleClick = () => {
        setShow(!show)
    }
    return(
        <div 
            className={`enabler_container`}
        >
            <p>{enabler_name}</p>
            <OnOffToggle onClickFunc={handleClick} state={show}/>
        </div>
    )
}