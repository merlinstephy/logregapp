import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        <center>
        <div className="text-center m-5-auto img">
            <h2 style={{color : 'white'}}>Reset your password</h2>
            <h5 style={{color : 'white'}}>Enter your email address and we will send you a new password</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </form>
           
        </div>
        </center>
    )
}