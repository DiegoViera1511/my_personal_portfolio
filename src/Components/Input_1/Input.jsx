import "./input_1.css"
import {useState} from "react";

export function Input_1({input_id, input_type, input_value, input_onChange, input_required, input_placeholder , icon}) {
    const [type , setType] = useState(input_type)
    
    return (
        <div className="input_1_container">
            <input
                className="input_1"
                id={input_id}
                type={type}
                value={input_value}
                onChange={input_onChange}
                required={input_required}
                placeholder={input_placeholder}
            />
            {input_type === "password" ?
                <div className="input_icon type_password" 
                     onMouseOver={() => setType("text")} 
                     onMouseLeave={() => setType("password")}
                >
                    {input_type === "password" && <i className="uil uil-eye"></i>}
                </div>
                :
                <div className="input_icon">
                    <i className={icon}></i>
                </div>
            }

        </div>
    )

}