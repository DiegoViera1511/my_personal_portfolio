import "./button1.css"

export function Button_icon_1({text , icon}){
    return(
        <button>
            {text}
            <i className={icon}></i>
        </button>
    )
}