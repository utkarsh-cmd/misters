import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div>
             <div className="login-page">
            <form className="flex login-form">
                <h3>Signup</h3>
                <label htmlFor="username">username</label>
                <input type='text' name="username"/>
                <label htmlFor="password">password</label>
                <input type='password' name='password' />
                <label htmlFor="confirm-password">confirm password</label>
                <input type='password' name='confirm-password' />
                <button className="login-button">LOGIN</button>
                <h4>Already have an account? <Link to="/login"><span>Signin</span></Link></h4>
            </form>
        </div>
        </div>
    )
}

export default Signup
