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



const SignIn = () => {
  const signStateChanger = useSelector((state) => state.rootReducer.signForm.signIn)
  const dispatch = useDispatch()
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  function handleLoginChange(e) {
    e.preventDefault()
    setLogin(e.target.value);
  }

  function handlePasswordChange(e) {
    e.preventDefault()
    setPassword(e.target.value);
  }
  function checkExistUser(e) {
    let count = 0;

    getIdList()

    const user = {
      login: login,
      password: password,
    }
    const signChanger = () => { dispatch(signFormChanger()) }


    try {
      const checkUser = JSON.parse(localStorage.getItem(`user_#${user.login}`))


      if (user.login === checkUser.login) {
        count++

      }
      if (user.password === checkUser.password) {
        count++
      }
      if (count === 2) {

        setLogin('')
        setPassword('')
        dispatch(signFormChanger())
        return alert(`U've singed in!`)

      }

      e.preventDefault()

      setLogin('')
      setPassword('')
      signChanger()

      alert('Wrong login or password, try again!')
    }
    catch {


      e.preventDefault()
      setLogin('')
      setPassword('')
      signChanger()

      alert('Wrong login or password, try again!')
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
      </form>
      <Link to={'/?'}>
        <Button type="submit" className="btn btn__primary btn__lg" onClick={checkExistUser}>
          Sing in!
        </Button>
      </Link>
    </div>
  );
}

export default SignIn;
