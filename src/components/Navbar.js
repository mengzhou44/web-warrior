import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from './Navbar.module.css'

const Navbar = () => {
   const data = useStaticQuery(graphql`
    query SiteInfo {
        site {
        siteMetadata {
            description
            title
        }
        }
    }
  `);
 
   const {title} = data.site.siteMetadata

  return (
    <nav>
      <h1 className={styles.title}>{title} </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
