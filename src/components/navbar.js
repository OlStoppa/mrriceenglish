import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <div className= "navbar">
    <ul>
      <li>
        <div className="icon-box">
          <span>Home</span>
          
        </div>
        
      </li>
      <li>
        <div className="icon-box">
          Services<span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
        <Link>
            <li>1 to 1 Lessons</li>
          </Link>
          <Link>
            <li>Writing Correction</li>
          </Link>
          <Link>
            <li>Proofreading</li>
          </Link>
          
        </ul>
      </li>
      <li>
        <div className="icon-box">
          Contact
        </div>
        
        
      </li>
      <li>
        <div className="icon-box">
          Testimonials
        </div>
        
      </li>
    </ul>
  </div>
)

export default Navbar