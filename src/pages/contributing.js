import React, { Component } from "react"

import Layout from "../components/layout"
import logo from "../assets/logo.png"
import styles from "./contributing.module.scss"

class Home extends Component {

  render() {
    return (
      <Layout>
        <div className={styles.widthContainer}>
          <div className={styles.content}>
            <h1 className={styles.header}>
              Contributing
            </h1>

            <p>
              The success of this project is only possible if we get a wide variety of viewpoints and experiences. As such, we are actively working to make contributing as easy as possible.
            </p>

            <p>
              The current process involves writing <a rel="noreferrer" target="_blank" href="https://www.markdownguide.org/">Markdown</a> files, which are then compiled into web pages using <a rel="noreferrer" target="_blank" href="https://www.gatsbyjs.com/">Gatsby</a>.
            </p>

            <p>Find out more about contributing from the <a rel="noreferrer" target="_blank" href="https://github.com/mitguide/mitguide.github.io/blob/master/CONTRIBUTING.md">Github repository</a>!</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home