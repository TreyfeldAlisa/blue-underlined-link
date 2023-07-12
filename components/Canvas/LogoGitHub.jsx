import React from "react";

import logo from "../../public/image/Hero_Image-Bg.jpg";

import styles from "./LogoGitHub.module.css";

export default function LogoGitHub() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" className={styles.img} />
        </div>
    );
}
