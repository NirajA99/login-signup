import React, { useState } from 'react';
import './LoginSignUp.css'
import userIcon from '../Assets/person.png';
import emialIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';

function LoginSignUp(props) {

    const [action , setAction] = useState('Login')
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === 'Login' ? <div></div> 
                :
                
                <div className="input">
                    <img src={userIcon} alt="" />
                    <input type='text' placeholder='Name'/>
                </div>}

                <div className="input">
                    <img src={emialIcon} alt="" />
                    <input type='emial' placeholder='Email'/>
                </div>

                <div className="input">
                    <img src={passwordIcon} alt="" />
                    <input type='password' placeholder='Password'/>
                </div>
        
            </div>
            {action === "Sign Up" ? <div></div>:
            <div className="forgotPassword">Forgot Password? <span>Click Here...</span></div>}
            
            <div className="submit-container">
                <div className={action === 'Login' ? "submit gray" : 'submit'} onClick={() => setAction('Sign Up')}>Sign Up</div>
                <div className={action === 'Sign Up' ? "submit gray" : 'submit'} onClick={() => setAction('Login')}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignUp;