import React from "react";
import Image from "next/image";
import localFonts from "next/font/local";
import cn from "classnames";

import styles from "./Navbar.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });

export default function Navbar() {
    return (
        <div className={cn(styles.nav, inter.className)}>
            <div>
                <Image alt="logo" width={200} height={100} src="/image/logo-header.png" />
            </div>
            <div className={styles.linkContainer}>
                <a href="#" className={styles.link}>
                    ./about/
                </a>
                <a href="#" className={styles.link}>
                    ./services/
                </a>
                <a href="#" className={styles.link}>
                    ./our_team
                </a>
                <a href="#" className={styles.link}>
                    ./all_works
                </a>
            </div>
            <div>
                <button className={styles.button}>Contact us</button>
            </div>
        </div>
    );
}
