import "./message_container.css"
export function Message_container({message_text, message_type , show_message}) {
    return (
        <div className={`message_container ${show_message ? 'show' : 'hide'} ${message_type}`}>
            {message_text}
        </div>
    )
}