import {useEffect, useState} from "react";
import "./logIn.css"
import {Button_icon_1} from "../Button_icon_1/Button_icon_1.jsx";
import {Link, Navigate} from "react-router-dom";
import {Input_1} from "../Input_1/Input.jsx";
import {Message_container} from "../Message_container/Message_container.jsx";

export function LogIn() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [showMessage , setShowMessage] = useState(false)
    const [textMessage , setTextMessage] = useState('')
    const [typeMessage , setTypeMessage] = useState('')


    useEffect(() => {
        const fetchToken = async () => {
            const token = localStorage.getItem('jwt')
            console.log(token)
            if (token) {
                const response = await fetch(
                    'https://backendprotfolio-production.up.railway.app/api/protected', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                if (response.status === 200) {
                    setRedirect(true)
                }
            }
        }
        fetchToken().then()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {name: username, password: password}
        try {
            const response = await fetch(
                'https://backendprotfolio-production.up.railway.app/api/users/logIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            console.log(`response status ${response.status}`)
            if (response.status === 200) {
                const {token: tokenResponse} = await response.json()
                localStorage.setItem('jwt', tokenResponse)
                setTextMessage("Success !")
                setShowMessage(true)
                setTypeMessage("success_message")
                setTimeout(() => {
                    setShowMessage(false)
                    setRedirect(true)
                },2000)
            } else if (response.status === 404) {
                setTextMessage("Invalid user name or password")
                setShowMessage(true)
                setTypeMessage("failure_message")
                setTimeout(() => {
                    setShowMessage(false)
                },2000)
            } else {
                const {message} = await response.json();
                console.error(message)
            }
        } catch (error) {
            console.error('Error creating user: ', error)
        }
    }
    if (redirect) {
        return <Navigate to={"/portfolio"}/>
    }

    return (
        <section id="logIn">
            <h1>Viera`s Portfolio</h1>
            <div className="logIn_div">
                <form className="logIn_form" onSubmit={handleSubmit}>
                    <h1>Welcome !</h1>
                    <Message_container
                        message_text={textMessage}
                        message_type={typeMessage}
                        show_message={showMessage}/>
                    <div>
                        <label form="login_user">&lt; User /&gt;</label>
                        <br/>
                        <br/>
                        <Input_1
                            input_id="login_user"
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
                        <label form="login_password">&lt; Password /&gt;</label>
                        <br/>
                        <br/>
                        <Input_1
                            input_id="login_password"
                            input_type="password"
                            input_value={password}
                            input_onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            input_required={true}
                            input_placeholder="Password"
                        />
                    </div>

                    <Button_icon_1 text="Sign in " icon="uil uil-signin" type="submit" />

                    <Link to="/register"><Button_icon_1 text="Register here !"/></Link>
                </form>
            </div>

        </section>
    )
}