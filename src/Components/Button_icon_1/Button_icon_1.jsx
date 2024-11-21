import "./button1.css"

export function Button_icon_1({text , icon , type = "button"}){
    return(
        <button className="button_icon_1" type={type}>
            {text}
            <i className={icon}></i>
        </button>
    )
}