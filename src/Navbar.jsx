import React from 'react'
import logo from "./Media/Logo.png"
import styles from "./Project1.module.css"
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div>
            <div className={styles.bar}>
                <p>This page is included in a Saas Website Kit. <span>View the Complete Kit <FaArrowRight /></span></p>
            </div>
            <div className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="logo" />
                    <p>Made By  <b>Balaraju</b></p>
                </div>
                <div className={styles.navbarList}>
                    <p>About</p>
                    <p>Features</p>
                    <p>Customers</p>
                    <p>Updates</p>
                    <p>Help</p>
                    <button>Get for free</button>
                </div>
            </div>
        </div>

    )
}

export default Navbar