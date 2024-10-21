import "./button1.css"

export function Button_icon_1({text , icon}){
    return(
        <button className="button_icon_1">
            {text}
            <i className={icon}></i>
        </button>
    )
}