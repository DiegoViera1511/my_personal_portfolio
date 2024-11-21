import {useState} from "react";
import "./register.css"
import {Button_icon_1} from "../Button_icon_1/Button_icon_1.jsx";
import {Link} from "react-router-dom";


export function Register(){

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    return (
        <section id="register">
            <h1>Viera`s Portfolio</h1>
            <div className="register_div">
                <form className="register_form">
                    <h1>New Account !</h1>
                    <div>
                        <label form="register_username">&lt; User /&gt;</label>
                        <br/>
                        <br/>
                        <input
                            id="register_username"
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
                        <label form="register_password">&lt; Password /&gt;</label>
                        <br/>
                        <br/>
                        <input
                            id="register_password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required={true}
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <label form="register_confirm">&lt; Confirm password /&gt;</label>
                        <br/>
                        <br/>
                        <input
                            id="register_confirm"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required={true}
                            placeholder="Confirm"
                        />
                    </div>


                    <Button_icon_1 text="Register " icon="uil uil-book-open" type="submit"></Button_icon_1>
                    <Link to="/LogIn"><Button_icon_1 text="Sign in" icon="uil uil-backward" /></Link>
                </form>
            </div>
        </section>
    )
}