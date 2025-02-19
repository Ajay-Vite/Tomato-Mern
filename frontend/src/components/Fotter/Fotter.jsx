import React from 'react'
import './Fotter.css'
import { assets } from '../../assets/assets'

const Fotter = () => {
  return (
    <div className='fotter' id='fotter'>
        <div className="fotter-content">
            <div className="fotter-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum veritatis perferendis eveniet amet autem repellendus error pariatur sit rem voluptas sed, cupiditate quo? Ab nisi esse dolorem sapiente maxime.</p>
                <div className="fotter-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="fotter-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About-Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="fotter-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 95666318051</li>
                    <li>contact-ajay@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="fotter-copyright">
            Copyright 2025 @ Tomato.com  - All Rights Reserved
        </p>
    </div>
  )
}

export default Fotter