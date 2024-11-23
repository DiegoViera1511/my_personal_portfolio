import {useState} from "react";
import "./register.css"
import {Button_icon_1} from "../Button_icon_1/Button_icon_1.jsx";
import {Link, Navigate} from "react-router-dom";
import {Input_1} from "../Input_1/Input.jsx";
import {Message_container} from "../Message_container/Message_container.jsx";


export function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmation, setConfirmation] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [showMessage , setShowMessage] = useState(false)
    const [textMessage , setTextMessage] = useState('')
    const [typeMessage , setTypeMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {name: username, password: password, confirmation: confirmation}

        try {
            if (password !== confirmation) {
                setTextMessage("Password doesn't match")
                setShowMessage(true)
                setTypeMessage("failure_message")
                setTimeout(() => {
                    setShowMessage(false)
                },3000)
                return
            }
            const response = await fetch(
                'http://backendprotfolio-production.up.railway.app/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            if (response.status === 201) {
                setTextMessage("User Registered")
                setShowMessage(true)
                setTypeMessage("success_message")
                setTimeout(() => {
                    setShowMessage(false)
                    setRedirect(true)
                },2000)
            } else if (response.status === 400) {
                setTextMessage("User already exist")
                setShowMessage(true)
                setTypeMessage("failure_message")
                setTimeout(() => {
                    setShowMessage(false)
                },3000)
            } else {
                const {message} = await response.json();
                console.error(message)
            }
        } catch (error) {
            console.error('Error creating user: ', error)
        }
    }

    if (redirect) {
        return <Navigate to={"/logIn"}/>
    }

    return (
        <section id="register">
            <h1>Viera`s Portfolio</h1>
            <div className="register_div">
                <form className="register_form" onSubmit={handleSubmit}>
                    <h1>New Account !</h1>
                    <Message_container
                        message_text={textMessage}
                        message_type={typeMessage}
                        show_message={showMessage}/>
                    <div>
                        <label form="register_username">&lt; User /&gt;</label>
                        <br/>
                        <br/>
                        <Input_1
                            input_id="register_username"
                            input_type="text"
                            input_value={username}
                            input_onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                            input_required={true}
                            input_placeholder="User name"
                        />
                    </div>
                    <div>
                        <label form="register_password">&lt; Password /&gt;</label>
                        <br/>
                        <br/>
                        <Input_1
                            input_id="register_password"
                            input_type="password"
                            input_value={password}
                            input_onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            input_required={true}
                            input_placeholder="Password"
                        />
                    </div>
                    <div>
                        <label form="register_confirm">&lt; Confirm password /&gt;</label>
                        <br/>
                        <br/>
                        <Input_1
                            input_id="register_confirm"
                            input_type="password"
                            input_value={confirmation}
                            input_onChange={(e) => {
                                setConfirmation(e.target.value)
                            }}
                            input_required={true}
                            input_placeholder="Confirm"
                        />
                    </div>


                    <Button_icon_1 text="Register " icon="uil uil-book-open" type="submit"></Button_icon_1>
                    <Link to="/LogIn"><Button_icon_1 text="Sign in" icon="uil uil-backward"/></Link>
                </form>
            </div>
        </section>
    )
}