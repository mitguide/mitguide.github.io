import React, { Component } from "react"

import { Link } from "gatsby"

import styles from "./header.module.scss"

class Header extends Component {

  render() {
    return (
      <header className={styles.headerContainer}>
        <div className={styles.homeBtn}>
          <Link className={styles.clickable} to="/">
            <h1>mit.guide</h1>
          </Link>
        </div>

        <div className={styles.links}>
          <Link className={styles.clickable} to="#">Posts</Link>
          <Link className={styles.clickable} to="#">Guides</Link>
          <Link className={styles.clickable} to="/contributing">Contributing</Link>
        </div>
      </header>
    )
  }
}

export default Header