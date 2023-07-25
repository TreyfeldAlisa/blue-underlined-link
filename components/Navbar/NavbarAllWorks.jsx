import React from "react";
// import Image from "next/image";
import Link from "next/link";
import localFonts from "next/font/local";
import cn from "classnames";
import logo from "../../public/image/logo-header.png";

import styles from "./NavbarAllWorks.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });

export default function NavbarAllWorks({ shouldBeWithLinks }) {
  return (
    <div className={cn(styles.nav, inter.className)}>
      <div className={styles.logoContainer}>
      {!shouldBeWithLinks && (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="16" fill="#DADFE5" />
          <path
            d="M10.3477 15.6543C10.3477 15.9619 10.4619 16.2256 10.708 16.4541L17.5459 23.1514C17.7393 23.3447 17.9854 23.4502 18.2754 23.4502C18.8555 23.4502 19.3213 22.9932 19.3213 22.4043C19.3213 22.1143 19.1982 21.8594 19.0049 21.6572L12.8438 15.6543L19.0049 9.65137C19.1982 9.44922 19.3213 9.18555 19.3213 8.9043C19.3213 8.31543 18.8555 7.8584 18.2754 7.8584C17.9854 7.8584 17.7393 7.96387 17.5459 8.15723L10.708 14.8457C10.4619 15.083 10.3477 15.3467 10.3477 15.6543Z"
            fill="black"
          />
        </svg>
      )}
      <Link href="/" className={styles.logo}>
        <img
          alt="logo"
          src={logo}
          className={styles.logo}
          width={115}
          height={52}
        />
      </Link>
      </div>
      {shouldBeWithLinks && (
        <div className={styles.linkContainer}>
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
        </div>
      )}
      <button className={styles.button}>Contact us</button>
    </div>
  );
}
