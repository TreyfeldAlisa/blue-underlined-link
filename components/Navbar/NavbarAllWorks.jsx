import React from "react";
// import Image from "next/image";
import Link from "next/link";
import localFonts from "next/font/local";
import cn from "classnames";
import logo from "../../public/image/logo-header.png";

import styles from "./NavbarAllWorks.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });

export default function NavbarAllWorks(shouldBeWithLinks) {
  return (
    <div className={cn(styles.nav, inter.className)}>
      <Link href="/" className={styles.logo}>
        <img
          alt="logo"
          src={logo}
          className={styles.logo}
          width={115}
          height={52}
        />
      </Link>
      {shouldBeWithLinks && <div className={styles.linkContainer}>
        <Link href="#data" className={styles.link}>
          data_generation_&_collection
        </Link>
        <Link href="#processing" className={styles.link}>
          processing
        </Link>
        <Link href="#storing" className={styles.link}>
          storing_&_delivery
        </Link>
        <Link href="#also" className={styles.link}>
          also
        </Link>
      </div>}
      <button className={styles.button}>Contact us</button>
    </div>
  );
}
