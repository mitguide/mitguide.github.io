import React, { Component } from "react"

import Layout from "../components/layout"
import logo from "../assets/logo.png"
import styles from "./index.module.scss"

class Home extends Component {

  render() {
    return (
      <Layout>
        <div className={styles.hero}>
          <img className={styles.heroLogo} src={logo} alt="mitguide-logo" />

          <h1>mit.guide</h1>
          <p>An unofficial, community-driven guide to getting the most out of your MIT experience.</p>

        </div>
      </Layout>
    )
  }
}

export default Home
