import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import ProjectList from "../components/projectList"
import About from "../components/about"
import Contact from "../components/contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProjectList />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
