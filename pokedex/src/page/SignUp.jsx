import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signFormChanger } from "../redux/signFormReducer";

const idList = []

function getIdList() {
  const check = [localStorage].map(el => {
    for (let key in el) {
      if (typeof el[key] === 'string') {
        idList.push(JSON.parse(el[key]).id);
      }
    }
  })
  idList.sort((a, b) => a - b)
}



const SignUp = () => {
  const signStateChanger = useSelector((state) => state.rootReducer.signForm.signIn)
  const dispatch = useDispatch()
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPass] = useState('');

  function handleLoginChange(e) {
    e.preventDefault()
    setLogin(e.target.value);
  }

  function handlePasswordChange(e) {
    e.preventDefault()
    setPassword(e.target.value);
  }

  function handleConfPassChange(e) {
    e.preventDefault()
    setConfPass(e.target.value);
  }

  function clearInputs() {
    setLogin('')
    setPassword('')
    setConfPass('')
  }


  function addUser(e) {
    getIdList()
    const user = {
      login: login,
      password: password,
    }

    if (localStorage.length === 0) {
      user.id = 1
    } else {
      user.id = idList[idList.length - 1] + 1
    }

    userValidCheck()

    function userValidCheck() {
      if (JSON.parse(localStorage.getItem(`user_#${user.login}`)) !== null) {
        e.preventDefault()
        clearInputs()

        return alert('There is existing user with that login. Choose another one.')
      }
      else if (login.match(/,._-<>?|/ !== '')) {
        e.preventDefault()
        clearInputs()

        return alert(`Login must not any of ._-<>,?| symbols! Try again.`)
      } else if (password.length < 8) {
        e.preventDefault()
        clearInputs()

        return alert('Password must containt at least 8 symblos.')
      } else if (password !== confPass) {
        e.preventDefault()
        clearInputs()

        return alert('Password and confirms are not match. Check again.')
      } else {
        localStorage.setItem(`user_#${user.login}`, JSON.stringify(user))
        clearInputs()
        dispatch(signFormChanger())
        alert(`U've been signed up!`)
      }
    }
  }

  return (
    <div className='login-password-forms'>
      <form className='form'>
        <input
          type="text"
          id="new-todo-input"
          className="login-input__lg"
          name="Login"
          placeholder="Login"
          autoComplete="off"
          value={login}
          onChange={handleLoginChange}
        />
        <input
          type="text"
          id="new-todo-input-2"
          className="password-input__psw"
          name="Password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="text"
          id="new-todo-input-3"
          className="conf-password-input__psw"
          name="Confirm password"
          placeholder="Confirm password"
          autoComplete="off"
          value={confPass}
          onChange={handleConfPassChange}
        />
      </form>
      <Link to={'/?'}>
        <Button type="submit" className="btn btn__primary btn__lg" onClick={addUser}>
          Sing up!
        </Button>
      </Link>
    </div>
  );
}

export default SignUp;
