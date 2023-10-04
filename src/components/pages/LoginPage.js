import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <center>
            
        <div className="text-center m-5-auto img">
            <h1 style={{color : 'white'}}>Sign in to us</h1>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                <p><Link to="/register">Not yet registered? Register Now</Link>.</p>
            </form>
        
               
        
        </div>
        
        </center>
    )
}

