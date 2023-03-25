import React from 'react'
import './Login.css'
import img from '../../Assets/images/4043260_avatar_male_man_portrait_icon.png';

const Login = () => {
    return (
    
    <>

    <div className="form-login-container">
        
            <div className = "container-login">
            <img src={img} className='img'/>
                <form>
                    
                    <label htmlFor="email">E-posta:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Şifre:</label>
                    <input type="password" id="password" name="password" required />
                    
                </form>
                    
                <button type="submit"  className="login-button">Giriş Yap</button>
                    
            </div>
        
    </div>

    </>
    
    )
}

export default Login