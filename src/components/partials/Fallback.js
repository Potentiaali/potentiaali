import React from "react"
import styles from "./Fallback.module.scss"

const FallbackNav = () => <nav className={styles.fallbackNav} />

const FallbackContact = () => <section className={styles.fallbackContact} />

const FallbackFooter = () => <footer className={styles.fallbackFooter} />

const FallbackHero = () => <div className={styles.fallbackHero} />

const FallbackLoader = () => <div className={styles.loader} />

export default class Fallback extends React.Component {
  static Nav = FallbackNav
  static Contact = FallbackContact
  static Footer = FallbackFooter
  static Hero = FallbackHero
  static Loader = FallbackLoader
  render() {
    return <div />
  }
}
