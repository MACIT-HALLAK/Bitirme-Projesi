import React from 'react'
import './Register.css'
import img from '../../Assets/images/4043260_avatar_male_man_portrait_icon.png';

const Register = () => {
  return (
    
    <>

    <div className="form-container">
        
            <div className = "container">
            
            <img src={img} className='img'/>
                <form>
                    <label htmlFor="username">Kullanıcı Adı:</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="email">E-posta:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Şifre:</label>
                    <input type="password" id="password" name="password" required />
                    <label htmlFor="password-again">Şifre Tekrar:</label>
                    <input type="password" id="password-again" name="password-again" required />
                    
                </form>
                   
                <button type="submit"  className="register-button">Kayıt Ol</button>
            </div>
              
        
    </div>

    </>
    
    )
}

export default Register