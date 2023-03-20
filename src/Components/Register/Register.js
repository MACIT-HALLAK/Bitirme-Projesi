import React from 'react'
import './Register.css'

const Register = () => {
  return (
    
    <>

    <div className="form-container">
        <h1>Register Page</h1>
            <div className = "container">
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
                    
                <button type="submit"  className="register-button">Register</button>
                    
            </div>
        
    </div>

    </>
    
    )
}

export default Register