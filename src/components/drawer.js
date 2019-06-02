import React, { useState } from "react"
import CollapseNav from "./collapseNav"
import { Link } from "gatsby"
import Image from "./image"


const Drawer = props => {
  const initial = [false, false]
  const [[...expandArr], setExpand] = useState(initial)

  const expandItem = clicked => {
    const expandedSwitch = expandArr[clicked]
      ? new Array(expandArr.length).fill(false)
      : expandArr.map((item, index) => index === clicked)

    setExpand(expandedSwitch)
  }

  return (
    <div className={props.isOpen ? "drawer open" : "drawer"}>
      <div className="mobile-nav__header">
      <Image
            filename="MrRiceLogo2Name.png"
          />
      </div>
      
      <div className="mobile-nav-container">
        <ul>
          <CollapseNav
            item={"Services"}
            expand={expandArr[0]}
            expandItem={expandItem}
            index={0}
          >
            <ul>
              <Link >
                <li>Lessons</li>
              </Link>
              <Link >
                <li>Writing Correction</li>
              </Link>
              
            </ul>
          </CollapseNav>
          <Link ><li>Testimonials</li></Link>
          
          <Link ><li>Contact Me</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Drawer