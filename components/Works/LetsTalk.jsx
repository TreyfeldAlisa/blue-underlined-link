import React from "react";
import cn from "classnames";
import Image from "next/image";
import localFonts from "next/font/local";
import styles from "./LetsTalk.module.css";
import substract from "../../public/image/Subtract.png";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({
  src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf",
});

export default function LetsTalk() {
  return (
    <section className={styles.wrapper} id="contact">
      <img src={substract} alt="subtract" className={styles.img} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={cn(inter.className, styles.h1)}>Let’s talk</h1>
          <h1 className={cn(inter.className, styles.h2)}>about projects</h1>
        </div>
        <form className={styles.form}>
          <div className={styles.formInputs}>
            <input type="text" className={styles.input} placeholder="Name" />
            <input type="tel" className={styles.input} placeholder="Phone" />
            <input type="email" className={styles.input} placeholder="E-mail" />
          </div>
          <input
            type="text"
            className={cn(styles.input, styles.inputDescription)}
            placeholder="Description"
          />
          <button type="submit" className={cn(inter.className, styles.button)}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
