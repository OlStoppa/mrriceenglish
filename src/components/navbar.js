import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <div className= "navbar">
    <ul>
      <li>
        <div className="icon-box">
          <span>Home</span>
          <span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
          <Link>
            <li>Writing Correction</li>
          </Link>
          <Link>
            <li>Task 1</li>
          </Link>
          <Link>
            <li>Task 2</li>
          </Link>
          <Link>
            <li>Happy Days</li>
          </Link>
        </ul>
      </li>
      <li>
        <div className="icon-box">
          Services<span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
        <Link>
            <li>Writing Correction</li>
          </Link>
          <Link>
            <li>Task 1</li>
          </Link>
          <Link>
            <li>Task 2</li>
          </Link>
          <Link>
            <li>Happy Days</li>
          </Link>
        </ul>
      </li>
      <li>
        <div className="icon-box">
          Contact<span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
        <Link>
            <li>Writing Correction</li>
          </Link>
          <Link>
            <li>Task 1</li>
          </Link>
          <Link>
            <li>Task 2</li>
          </Link>
          <Link>
            <li>Happy Days</li>
          </Link>
        </ul>
      </li>
      <li>
        <div className="icon-box">
          Testimonials<span className="material-icons">arrow_drop_down</span>
        </div>
        <ul>
        <Link>
            <li>Writing Correction</li>
          </Link>
          <Link>
            <li>Task 1</li>
          </Link>
          <Link>
            <li>Task 2</li>
          </Link>
          <Link>
            <li>Happy Days</li>
          </Link>
        </ul>
      </li>
    </ul>
  </div>
)

export default Navbar