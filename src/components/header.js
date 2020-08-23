import React, { Component } from "react"

import { Link } from "gatsby"

import styles from "./header.module.scss"

class Header extends Component {

  render() {
    return (
      <header className={styles.headerContainer}>
        <div className={styles.widthContainer}>
          <div className={styles.homeBtn}>
            <Link className={styles.clickable} to="/">
              <h1>mit.guide</h1>
            </Link>
          </div>

          <div className={styles.links}>
            <Link className={styles.clickable} to="#">Posts</Link>
            <Link className={styles.clickable} to="/guides">Guides</Link>
            <a rel="noreferrer" target="_blank" href="https://github.com/mitguide/mitguide.github.io/blob/master/CONTRIBUTING.md" className={styles.clickable}>
              Contributing
            </a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header