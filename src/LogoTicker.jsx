import React from 'react'
import styles from "./logoTicker.module.css";
import acme from './Media/acme.png'
import apex from './Media/apex.png'
import celestia from './Media/celestia.png'
import echo from './Media/echo.png'
import pulse from './Media/pulse.png'
import quantum from './Media/quantum.png'

const LogoTicker = () => {
  return (
    <div className={styles.LogoTicker}>
      <img src={acme} alt="" />
      <img src={quantum} alt="" />
      <img src={echo} alt="" />
      <img src={celestia} alt="" />
      <img src={pulse} alt="" />
      <img src={apex} alt="" />

    </div>
  )
}

export default LogoTicker