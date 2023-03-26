import React from 'react'
import './Login.css'
import img from '../../Assets/images/4043260_avatar_male_man_portrait_icon.png';

const Login = () => {
    return (
    
    <>

    <div className="form-login-container">
        
            <div className = "login-container">
            <img src={img} className="login-img"/>
                <form className="login-form">
                    
                    <label className="login-label" htmlFor="email">E-posta:</label>
                    <input className="login-input" type="email" id="email" name="email" required />
                    <label className="login-label" htmlFor="password">Şifre:</label>
                    <input className="login-input" type="password" id="password" name="password" required />
                    
                </form>
                    
                <button type="submit"  className="login-button">Giriş Yap</button>
                    
            </div>
        
    </div>

    </>
    
    )
}

export default Login