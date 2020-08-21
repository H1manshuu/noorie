import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Noor Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey Guys{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my Personal Website. You are on your home page.</p>
        <p>
          This is a personal starter Blog created as an
           experiment to kill the boredom in lockdown period.
        </p>
        <p>Hope You like it</p>
        <Link to="/blog/">
          <Button marginTop="35px">Let's Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
