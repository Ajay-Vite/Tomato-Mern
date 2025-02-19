import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext'
import axios from 'axios'

const LoginPopup = ({ setLogin }) => {

  const { url  , setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState("Sign Up")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangerHandeler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += '/api/user/login'
    }
    else {
      newUrl += '/api/user/register'
    }

    const response = await axios.post(newUrl,data);

    if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token',response.data.token)
        setLogin(false);
    }
    else{
      alert(response.data.message)
    }
  }

  return (
    <>
      <div className="login-popup">
        <form onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-input">
            {currState === "Login" ? <></> : <input name="name" onChange={onChangerHandeler} value={data.name} type="text" placeholder='Your Name' required />}
            <input type="email" name='email' onChange={onChangerHandeler} value={data.email} placeholder='Your Email' required />
            <input type="password" name='password' onChange={onChangerHandeler} value={data.password} placeholder='Your Password' required />
          </div>
          <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login In"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing , I Agree To The Terms Of Use & Privacy Policy.</p>
          </div>
          {currState === "Sign Up" ?
            <p onClick={() => setCurrState("Login")}>Already Have An Account? <span>Login Here</span></p> :
            <p onClick={() => setCurrState("Sign Up")}>Create A New Account? <span>Click Here</span></p>}
        </form>
      </div>
    </>
  )
}

export default LoginPopup