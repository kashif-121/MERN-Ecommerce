import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className="login-wrapper">
        <form action="">
            <h3>Register start shopping your favorite items.</h3>
            <div className="form-group">
                <label htmlFor="">Fullname</label>
                <input type="text" className="form-control" placeholder='Enter your fullname'/>  
            </div>
            
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" placeholder='Enter your email'/>  
            </div>

            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="text" className="form-control" placeholder='Enter your password'/>  
            </div>

            <div className="form-group">
                <label htmlFor="">Confirm Password</label>
                <input type="text" className="form-control" placeholder='Please confirm your password'/>  
            </div>
            <input type="submit" className="btn btn-dark" value="Register"/>
        </form>
    </div>
  )
}

export default Register