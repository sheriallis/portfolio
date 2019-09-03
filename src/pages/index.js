import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import ProjectList from "../components/projectList"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProjectList />
  </Layout>
)

export default IndexPage
