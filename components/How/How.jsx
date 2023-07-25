import React from "react";
import cn from "classnames";
// import img from 'next/img';
import localFonts from "next/font/local";
import styles from "./How.module.css";

import blue from "../../public/image/Subtractblue.png";
import pink from "../../public/image/Subtractpink.png";
import green from "../../public/image/Subtractgreen.png";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });

export default function HowWeCan() {
  return (
    <div className={styles.container}>
      <div className={styles.substract}>
        <div className={cn(inter.className, styles.h1, styles.h1Color)}>
          Let’s talk
        </div>
        <div className={cn(inter.className, styles.h1)}>about how we can</div>
        <div
          className={cn(
            styles.substractContainer,
            styles.substractContainerBlue
          )}
        >
          <img
            src={blue}
            alt="blue"
            // className={styles.frame}
            // width={1398}
            // height={8}
          />
          <span
            className={cn(inter.className, styles.substractText, styles.blue)}
          >
            improve <br /> your
            <br /> processes <br />
            through our
            <br /> solutions
          </span>
        </div>
      </div>

      <div
        className={cn(
          inter.className,
          styles.substract,
          styles.subtractGreenPink
        )}
      >
        <div
          className={cn(
            styles.substractContainer,
            styles.substractContainerPink
          )}
        >
          <img
            src={pink}
            alt="pink"
            // className={styles.frame}
            // width={1398}
            // height={8}
          />
          <span
            className={cn(inter.className, styles.substractText, styles.pink)}
          >
            decrease <br />
            your <br />
            costs
          </span>
        </div>
        <div className={cn(inter.className, styles.textContainer)}>
          <div className={cn(inter.className, styles.text)}>
            Our philosophy of “Doing what is right for the client” guides us to
            think about the most suitable and efficient solution for your
            specific circumstances. Let’s find the fastest and the most
            affordable route to your success.
          </div>
        </div>
        <div
          className={cn(
            styles.substractContainer,
            styles.substractContainerGreen
          )}
        >
          <img
            src={green}
            alt="green"
            // className={styles.frame}
            // width={1398}
            // height={8}
          />
          <span
            className={cn(inter.className, styles.substractText, styles.green)}
          >
            increase
            <br /> your <br />
            revenue
          </span>
        </div>
      </div>
    </div>
  );
}
