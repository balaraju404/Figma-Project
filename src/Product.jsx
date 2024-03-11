import React from 'react'
import styles from "./product.module.css"
import ProductImage from "./Media/ProductImage.png"
import torus from "./Media/torus.png"
import pyramid from "./Media/pyramid.png"
import { TbLeaf } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { MdLockOutline } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

const Product = () => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.ic1}>
                <h6>Boost your productivity</h6>
                <h1>A more effective way to track progress</h1>
                <p>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just
                    minutes with the set of free components for Framer.</p>
            </div>
            <img src={ProductImage} alt="" />
            <div className={styles.ic2}>
                <div>
                    <TbLeaf />
                    <h2>Integration ecosystem</h2>
                    <p>Track your progress and motivate your efforts everyday</p>
                    <p>Learn More <FaArrowRight /></p>
                </div>
                <div>
                    <PiTargetBold />
                    <h2>Goal setting and tracking</h2>
                    <p>Set and track goals with manageable task breakdowns.</p>
                    <p>Learn More <FaArrowRight /></p>
                </div>
                <div>
                    <MdLockOutline />
                    <h2>Secure data encryption</h2>
                    <p>Ensure your data's safety with top-tier encryption.</p>
                    <p>Learn More <FaArrowRight /></p>
                </div>
                <div>
                    <IoNotificationsOutline />
                    <h2>Customizable notifications</h2>
                    <p>Get alerts on tasks and deadlines that matter most.</p>
                    <p>Learn More <FaArrowRight /></p>
                </div>
            </div>
            <img src={torus} alt="" id={styles.img1} />
            <img src={pyramid} alt="" id={styles.img2}/>
        </div>
    )
}

export default Product