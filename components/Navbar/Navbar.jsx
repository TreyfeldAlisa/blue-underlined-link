import React from "react";
// import img from "next/img";
import Link from "next/link";
import localFonts from "next/font/local";
import cn from "classnames";
import logo from "../../public/image/logo-header.png";

import styles from "./Navbar.module.css";
import { links } from "../linksMock";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });


export default function Navbar() {
  return (
    <div className={cn(styles.nav, inter.className)}>
      <Link href="#home" className={styles.logo}>
        <img
          alt="logo"
          src={logo}
          className={styles.logo}
          width={115}
          height={52}
        />
      </Link>
      <div className={styles.linkContainer}>
        {links.map(({ href, name }) => (
          <Link
            href={href}
            className={styles.link}
            onClick={() => setOpen(false)}
          >
            {name}
          </Link>
        ))}
      </div>
      <button className={styles.button}>Contact us</button>
    </div>
  );
}
