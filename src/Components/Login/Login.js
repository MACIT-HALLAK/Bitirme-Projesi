import React from 'react'
import './Login.css'

const Login = () => {
    return (
    
    <>

    <div className="form-container">
        <h1>Giriş Sayfası</h1>
            <div className = "container">
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