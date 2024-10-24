import "./write_animation.css"

export function Write_Animation({text}){
    const l = text.length + 1
    function hello(){
        console.log()
    }
    return(
        <div className="write_animation_container">
            <p className="animation_text" style={{
                width: `${l}ch`,
                animation: `typing 7s steps(${l}) infinite, blink 0.5s infinite step-end alternate`
            }}>{text}</p>
        </div>

    )
}