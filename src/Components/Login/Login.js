import React from 'react'
import './Login.css'
import img from '../../Assets/images/4043260_avatar_male_man_portrait_icon.png';
import BackTo from "../BackTo/BackTo";


const Login = () => {
    return (
            
            <div className="login-wraper" >
                <BackTo/>
                <div className="form-login-container">
                    
                        <div className = "login-container">
                            <img src={img} className="login-img"/>
                            <form className="login-form">
                                
                                <label className="login-label-1" htmlFor="email">E-posta:</label>
                                <input className="login-input-1" type="email" id="email" name="email" required />
                                <label className="login-label-2" htmlFor="password">Şifre:</label>
                                <input className="login-input-2" type="password" id="password" name="password" required />
                                <button type="submit"  className="login-button">Giriş Yap</button>
                            
                            </form>   
                        </div>
                    
                </div>
            </div>
    )
}
export default Login