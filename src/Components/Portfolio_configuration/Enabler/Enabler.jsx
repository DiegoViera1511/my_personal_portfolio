import "./enabler.css"
export function Enabler({enabler_name , show , setShow}){
    
    return(
        <div 
            className={`enabler_container`}
            onClick={() => setShow(!show)}
        >
            <p>{enabler_name}</p>
            <div className={`enabler_state_container enabler_${show ? 'on' : 'off'}`}>
                <p>{show ? 'ON' : 'OFF'}</p>
            </div>
        </div>
    )
}