import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login-wrapper">
        <form action="">
            <h3>Login Now and start shopping your favorite items.</h3>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" placeholder='Enter your email'/>  
            </div>

            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="text" className="form-control" placeholder='Enter your password'/>  
            </div>
            <input type="submit" className="btn btn-dark" value="Login"/>
        </form>
    </div>
  )
}

export default Login