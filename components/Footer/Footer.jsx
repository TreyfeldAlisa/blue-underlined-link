import React, { useState } from "react";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./Footer.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.edgeContainer}>
                <div className={styles.edgeColorContainer}>
                    <div className={cn(styles.edge, styles.left)}></div>
                </div>
                <div className={styles.edgeColorContainer}>
                    <div className={cn(styles.edge, styles.right)}></div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={cn(inter.className, styles.linkContainer)}>
                    ./social/
                    {"  "}
                    <a href="#" className={styles.links}>
                        Upwork
                    </a>
                    ,{"  "}
                    <a href="#" className={styles.links}>
                        Telegram
                    </a>
                    ,{"  "}
                    <a href="#" className={styles.links}>
                        Mail
                    </a>
                </div>
                <div className={styles.footerContainer}>
                    <div className={styles.police}>
                        <div className={cn(jet.className, styles.text)}>Privacy police</div>
                        <div className={cn(jet.className, styles.text)}>Term of use</div>
                    </div>
                    <div className={cn(jet.className, styles.bulText)}>
                        blue underlined link, 2023
                    </div>
                </div>
            </div>
        </div>
    );
}
