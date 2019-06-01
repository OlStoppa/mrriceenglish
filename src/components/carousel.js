import React, {useEffect, useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Carousel = ({ data }) => {
    
    const [displayedImage, incrementDisplayed] = useState(0)
    const [seconds, incrementSeconds] = useState(0)
    const [overlayText, changeText] = useState(0)

    const overlay = [["Study where you like", "Twiddle Them"], ["Learn words", "Do things"], ["Blah blah", "Happy times"]]
    

    useEffect(() => {
        const started = setInterval(() => {
            
            incrementDisplayed(displayedImage => displayedImage < data.CarouselImages.edges.length - 1 ? displayedImage + 1 : 0)
            changeText(overlayText => overlayText < overlay.length - 1 ? overlayText + 1 : 0)
        }, 8000)
        return () => clearInterval(started)
      }, [])
      useEffect(() => {
        const secondCounter = setInterval(() => {
          incrementSeconds(seconds => seconds < 7 ? seconds + 1 : 0)
        }, 1000)
        return () => clearInterval(secondCounter)
      }, [])
       
    
    let next = displayedImage < data.CarouselImages.edges.length - 1 ? displayedImage + 1 : 0
    
    return (
        <>
        {data.CarouselImages.edges.map((image, index) => {
            let style;
            if(index === displayedImage){
                 style = "top"
            }
            else if(index === next){
                 style = "next"
            }else {
                 style = ""
            }

        return <div className={`top-image-container ${style}`}>
        <Img imgStyle={{opacity: "inherit", transition: "inherit"}} fluid={data.CarouselImages.edges[index].node.childImageSharp.fluid}/>
        </div>})
        }
        <div className="text-overlay">
        <h3 className={seconds > 2 && seconds < 7  ? "text-overlay__item display" : "text-overlay__item"}>{overlay[overlayText][0]}</h3>
        <h3 className={seconds > 4 && seconds < 7 ? "text-overlay__item display" : "text-overlay__item"}>{overlay[overlayText][1]}</h3>
      </div>
        
        </>
    )
}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        CarouselImages: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)/" }
            relativeDirectory: { eq: "carousel" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 1300) {
                  ...GatsbyImageSharpFluid
                }
                
              }
            }
          }
        }
        
      }
      
  
      `}
      render={data => <Carousel data={data} {...props} />}
      />
  )