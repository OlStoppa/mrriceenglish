import React from "react"
import { Link } from "gatsby"
import { FaSkype, FaComments, FaLaptop } from "react-icons/fa"
import { IconContext } from "react-icons"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Carousel from "../components/carousel"

const IndexPage = () => {

 

return(
  <Layout>
    <SEO title="Home" />
    
    <div className="container__main-img">    
      <Carousel />
      
    </div>
    <div className="container__main-info">
      <div className="main-info__box">
        
        <div className="headshot-container">
        <Image
          filename="Headshot.png" />
        </div>
        <div className="info-container">
        <h5>About Me</h5>
        <p>I'm a full-time English wizard. I happen to also be a part-time shriveled testicle. I'll make you talk gooder with all the newest words. Your boss will promote you or sack you out of jealousy for your ability to chat shit with whitey!</p>
        </div>
        
      </div>
            

    </div>
    <div className="services">
        <div className="services-title">
          <span>
            <span></span>
          </span>
          <h3>What I Offer</h3>
          <span>
            <span></span>
          </span>
        </div>
        <IconContext.Provider value={{  className: "social-icons", size: "3rem", color: "#0099cc"}}>
        <div className="service-main__container">
          <div className="service-box">   
            <div className="service-icon">
              <FaSkype />
            </div>
            <h5>1 to 1 Lessons</h5>
            <div>
              <p>I use skype to groom you to do things</p>
            </div>
          </div>
          <div className="service-box">   
            <div className="service-icon">
              <FaComments />
            </div>
            <h5>1 to 1 Lessons</h5>
            <div>
              <p>I use skype to groom you to do things</p>
            </div>
          </div>
          <div className="service-box">   
            <div className="service-icon">
              <FaLaptop />
            </div>
            <h5>1 to 1 Lessons</h5>
            <div>
              <p>I use skype to groom you to do things</p>
            </div>
          </div>

        </div>
        </IconContext.Provider>

      </div>
    <div className="contact-bar">
      <div className="contact-bar__text">
        <p>Contact me for a FREE 15 minute consultation to discuss what you need!</p>
      </div>
      <div className="contact-bar__button">Free Consultation</div>
    </div>
  </Layout>
)
}

export default IndexPage
