import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const idList = []
    const check = [localStorage].map(el => {
        for (let key in el) {
            if (typeof el[key] === 'string') {
                idList.push(JSON.parse(el[key]).id);
            }
        }
    })
    idList.sort((a, b) => a - b)
    console.log(idList);
    function handleLoginChange(e) {
        e.preventDefault()
        setLogin(e.target.value);
    }

    function handlePasswordChange(e) {
        e.preventDefault()
        setPassword(e.target.value);
    }
    function addUser(e) {

        console.log(idList[idList.length - 1]);
        const user = {
            login: login,
            password: password,
        }

        if (localStorage.length === 0) {
            user.id = 1
        } else {
            user.id = idList[idList.length - 1] + 1
        }


        localStorage.setItem(`user_#${user.id}`, JSON.stringify(user))
        setLogin('')
        setPassword('')
    }

    function showUser(e) {
        alert(JSON.stringify(localStorage))

    }
    return (
        <div className='login-password-forms'>
            <form className='form'>
                <input
                    type="text"
                    id="new-todo-input"
                    className="login-input__lg"
                    name="text"
                    autoComplete="off"
                    value={login}
                    onChange={handleLoginChange}
                />
                <input
                    type="text"
                    id="new-todo-input-2"
                    className="password-input__psw"
                    name="text"
                    autoComplete="off"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </form>
            <Button type="submit" className="btn btn__primary btn__lg" onClick={addUser}>
                Sing in!
            </Button>
            <Button type="submit" className="btn btn__primary btn__lg" onClick={showUser}>
                Get me userlist!
            </Button>
        </div>
    );
}

export default SignIn;