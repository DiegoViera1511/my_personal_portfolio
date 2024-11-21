import "./input_1.css"

export function Input_1({input_id, input_type, input_value, input_onChange, input_required, input_placeholder}) {
    return (
        <div className="input_1_container">
            <input
                className="input_1"
                id={input_id}
                type={input_type}
                value={input_value}
                onChange={input_onChange}
                required={input_required}
                placeholder={input_placeholder}
            />
        </div>
    )

}