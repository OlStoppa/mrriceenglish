import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Carousel from "../components/carousel"

const IndexPage = () => {

 

return(
  <Layout>
    <SEO title="Home" />
    
    <div className="container__main-img">
      {/* <Image 
        filename="writing.jpg"
      /> */}
     
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
        <p>I'm a full-time English wizard. I happen to also be a part-time shriveled testicle</p>
        </div>
        
      </div>
      

    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
}

export default IndexPage
