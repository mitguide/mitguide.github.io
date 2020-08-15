import React, { Component } from "react"

import Header from "./header"
import styles from "./layout.module.scss"

class Layout extends Component {

  render() {
    const { children } = this.props

    return (
      <div className={styles.pageContainer}>
        <Header />

        <main>
          { children }
        </main>
      </div>
    )
  }
}

export default Layout