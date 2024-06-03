import React, { useContext, useState } from 'react'
// Css
import './login.css'
// useContext
import { Context } from '../context/Context'


const Login = () => {

    const { setAuth, currentLogin, currentPassword, langu, sign, your, pass, loginn} = useContext(Context)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginSubnit = e => {
        e.preventDefault()
        login === currentLogin && password === currentPassword && setAuth(true)
    }

  return (
    <div className='login'>
        <div className="container login1">
            <div className="login_main">
            <form action="" onSubmit={e => loginSubnit(e)} className='form'>
                <p className='login_main_p'>{sign[langu]}</p>
                <p className='login_p'>{your[langu]}</p>
                <div className="login_main_input_inp">
                    <input type="text" onChange={e => setLogin(e.target.value)} className='input'/>
                </div>
                <p className='login_p'>{pass[langu]}</p>
                <div className="login_main_input_inp">
                    <input type="password" onChange={e => setPassword(e.target.value)} className='input'/>
                </div>
                <button type='submit' className='btn login_main_btn'>{loginn[langu]}</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login