import React, { Component } from "react"
import logo from "../assets/mitguide.png"
import styles from "../styles/index.module.scss"

class Home extends Component {

  render() {
    return (
    <div className={styles.mainContainer}>
      <div className={styles.hero}>
        <img className={styles.heroLogo} src={logo} alt="mitguide-logo" />
      </div>
    </div>
    )
  }
}

export default Home
