import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavBarMinimal.module.css";
import logo from "../../public/image/logo-header.png";
import { links } from "../linksMock";

const NavBarMinimal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.navMinimal}>
      <Link href="#home" className={styles.logo}>
        <img
          alt="logo"
          src={logo}
          className={styles.logo}
          width={60}
          height={40}
        />
      </Link>
      <button type="button" onClick={() => setOpen(!open)}>
        ///
      </button>
      {open && (
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
          <button className={styles.button}>Contact us</button>
        </div>
      )}
    </div>
  );
};

export default NavBarMinimal;
