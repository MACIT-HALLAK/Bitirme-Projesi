import React from 'react'
import './Register.css'
import img from '../../Assets/images/4043260_avatar_male_man_portrait_icon.png';

const Register = () => {
  return (
    
    <div className='register-wraper'>

    <div className="form-register-container">
        
            <div className = "register-container">
            
            <img src={img} className="register-img"/>
                <form className="register-form">
                    <label className="register-label" htmlFor="username">Kullanıcı Adı:</label>
                    <input className="register-input" type="text" id="username" name="username" required />
                    <label className="register-label" htmlFor="email">E-posta:</label>
                    <input className="register-input" type="email" id="email" name="email" required />
                    <label className="register-label" htmlFor="password">Şifre:</label>
                    <input className="register-input" type="password" id="password" name="password" required />
                    <label className="register-label" htmlFor="password-again">Şifre Tekrar:</label>
                    <input className="register-input" type="password" id="password-again" name="password-again" required />
                    
                </form>
                   
                <button type="submit"  className="register-button">Kayıt Ol</button>
            </div>
              
        
    </div>

    </div>
    
    )
}

export default Register