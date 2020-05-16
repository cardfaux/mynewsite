import React from "react"

import Layout from "../components/Shared/Layout"
import Symbol from "../components/HomePage/Symbol"
import TitleSection from "../components/HomePage/TitleSection"
import "../styles/style.css"

const HomePage = () => {
  return (
    <Layout>
      <Symbol />
      <TitleSection />
    </Layout>
  )
}

export default HomePage
