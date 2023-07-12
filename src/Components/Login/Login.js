import './Login.css';
import img from '../../Assets/images/4043260_avatar_male_man_portrait_icon.png';
import BackTo from '../BackTo/BackTo';
import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accept, setAccept] = useState(false);
  const [cookies, setCookies] = useCookies(['email']);

  async function submit(event) {
    event.preventDefault();
    let flag = true;
    if (password.length < 8) {
      flag = false;
    }

    try {
      if (flag) {
        let res = await axios
          .post(
            `https://librarygop.com/public/index.php/api/login/${email}/${password}`
          )
          .then((res) => {
            console.log(res.data);
            if (String(res.status) === '200') {
              toast.success(res.data.message, {
                position: 'top-right',
                autoClose: 1500, // مدة ظهور الرسالة (بالمللي ثانية)
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                toastId: 'success_loginToast', // معرّف فريد للتأكد من عدم تكرار ظهور الرسالة
              });
              setTimeout(() => {
                setCookies('email', email, { path: '/' });
                setCookies('role', res.data[0][0].role, { path: '/' });
                setCookies('user_id', res.data[0][0].id, { path: '/' });
                window.location.pathname = '/';
              }, 1500);
            } else {
              toast.error(res.data.message, {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                // theme: 'colored',
                toastId: 'error_loginToast', // معرّف فريد للتأكد من عدم تكرار ظهور الرسالة
              });
            }
          });
      }
    } catch (err) {
      console.log('je;;;;;;lkljhnj');
      console.log(err);
    }
  }

  return (
    <div className="login-wraper">
      <ToastContainer />
      <BackTo path={'Register'} dir={'rtl'} />
      <div className="form-login-container">
        <div className="login-container">
          <img src={img} className="login-img" />
          <form className="login-form" onSubmit={submit}>
            <label className="login-label-1" htmlFor="email">
              E-posta:
            </label>
            <input
              className="login-input-1"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="login-label-2" htmlFor="password">
              Şifre:
            </label>
            <input
              className="login-input-2"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
      <BackTo />
    </div>
  );
};

export default Login;
