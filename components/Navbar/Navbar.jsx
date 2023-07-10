import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import localFonts from "next/font/local";
import cn from 'classnames';
import logo from "../../public/image/logo-header.png";

import styles from './Navbar.module.css';

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });

export default function Navbar() {
    return (
        <div className={cn(styles.nav, inter.className)}>
            <Link href="#home" className={styles.logo}>
                <Image alt="logo" src={logo} className={styles.logo} width={115} height={52}/>
            </Link>
            <div className={styles.linkContainer}>
                <Link href="#about" className={styles.link}>
                    ./about/
                </Link>
                <Link href="#services" className={styles.link}>
                    ./services/
                </Link>
                <Link href="#team" className={styles.link}>
                    ./our_team
                </Link>
                <Link href="/allworks" className={styles.link}>
                    ./all_works
                </Link>
            </div>
            <button className={styles.button}>Contact us</button>
        </div>
    );
}