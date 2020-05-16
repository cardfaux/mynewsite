import React from "react"

import Layout from "../components/Shared/Layout"
import Symbol from "../components/HomePage/Symbol"
import TitleSection from "../components/HomePage/TitleSection"
import Button from "../components/Shared/Button"
import "../styles/style.css"

const HomePage = () => {
  return (
    <Layout>
      <Symbol />
      <TitleSection />
      <Button>Contact Me</Button>
    </Layout>
  )
}

export default HomePage
