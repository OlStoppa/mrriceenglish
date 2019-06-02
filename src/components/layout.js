/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Drawer from "./drawer"
import MenuBtn from "./menuBtn"
import Topbar from "./topbar"
import Header from "./header"
import Navbar from "./navbar"
import Social from "./social"
import "./index.scss"

const Layout = ({ children }) => {

  let [drawerOpen, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawerOpen);
  }
return(
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="main-body">
        <div className="container">
          <div className="mobile-menu">
            <MenuBtn 
              isOpen={drawerOpen}
              toggleDrawer={toggleDrawer}
            />
          </div>
        <Topbar />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            
            
            paddingTop: 0,
          }}
        >
          <Navbar />
          <main>{children}</main>
          <Drawer 
            isOpen={drawerOpen}
          />
          <footer>
            <div className="footer-main">
              <div className="footer-main__box">
                <h4>Free Consultaion</h4>
                <p>Contact me to discuss what services you need. This is usually done over Skype but special arrangements can be made if necessary.</p>
              </div>
              <div className="footer-main__box">
                <h4>Social Media</h4>
                <Social />
                <p>Follow me on social media for all my latest updates and great English learning content.</p>
              </div>
              </div>  


            <div className="footer-bottom">
            © {new Date().getFullYear()} Mr. Rice English
            </div>
            
          
          </footer>
          {drawerOpen && 
        <div className="overlay" onClick={toggleDrawer}/>
        }
        </div>
        </div>
      </div>
    )}
  />
)
        }


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
