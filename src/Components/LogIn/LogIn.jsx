import {useState} from "react";
import "./logIn.css"
import {Button_icon_1} from "../Button_icon_1/Button_icon_1.jsx";
import {Link} from "react-router-dom";
import {Navigate} from "react-router-dom";


export function LogIn(){
    
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    
    return (
        <section id="logIn">
            <h1>Viera`s Portfolio</h1>
            <div className="logIn_div">
                <form className="logIn_form">
                    <h1>Welcome !</h1>

                    <div>
                        <label form="login_user">&lt; User /&gt;</label>
                        <br/>
                        <br/>
                        <input
                            id="login_user"
                            type="text"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                            required={true}
                            placeholder="User name"
                        />
                    </div>
                    <div>
                        <label form="login_password">&lt; Password /&gt;</label>
                        <br/>
                        <br/>
                        <input
                            id="login_password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required={true}
                            placeholder="Password"
                        />
                    </div>

                    <Button_icon_1 text="Sign in " icon="uil uil-signin" type="submit"></Button_icon_1>
                    
                    <Link to="/register"><Button_icon_1 text="Register here !" /></Link>
                </form>
            </div>

        </section>
    )
}