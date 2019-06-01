import React from 'react'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import { IconContext } from "react-icons"

const SocialLinks = () => (
    <IconContext.Provider value={{  className: "social-icons", size: "1.5em"}}>
    <div className="container__social-links">
        <div className="social-icon">
        <FaFacebook />
        </div>
        <div className="social-icon">
        <FaYoutube />
        </div>
        <div className="social-icon">
        <FaTwitter />
        </div>
        <div className="social-icon">
        <FaInstagram />
        </div>

    </div>
    </IconContext.Provider>
)


export default SocialLinks