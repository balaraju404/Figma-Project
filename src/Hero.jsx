import React from 'react'
import styles from "./hero.module.css"
import { FaArrowRight } from "react-icons/fa6";
import Visual from "./Media/Visual.png"
import cylender1 from "./Media/cylinder1.png"
import halftorus1 from "./Media/half-torus1.png"
const Hero = () => {
    return (
        <div className={styles.Hero}>
            <img src={cylender1} id={styles.img1} alt="" />
            <img src={halftorus1} id={styles.img2} alt="" />
            <div className={styles.left}>
                <button>Version 2.0 is Here</button>
                <div className={styles.Content}>
                    <h1>Pathway to productivity</h1>
                    <p>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
                    <div className={styles.ButtonsConatiner}>
                        <button>Get for free</button>
                        <p>Learn More <FaArrowRight /></p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <img src={Visual} alt="" />
            </div>
        </div>
    )
}

export default Hero