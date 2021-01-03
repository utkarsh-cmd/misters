import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="login-page">
            <form className="flex login-form">
                <h3>Login</h3>
                <label htmlFor="username">username</label>
                <input type='text' name="username"/>
                <label htmlFor="password">password</label>
                <input type='password' name='password' />
                <button className="login-button">LOGIN</button>
                <h4>Don't have an account? <Link to="/signup"><span>Signup</span></Link></h4>
            </form>
        </div>
    )
}

export default Login
