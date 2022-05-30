import React from "react"
import Layout from "../components/Layout"
import * as styles from "./index.module.css"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>DESIGN</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </section>
    </Layout>
  )
}

//export page query
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
