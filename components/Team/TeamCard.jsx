import React from "react";
import cn from "classnames";
// import Image from 'next/image';
import localFonts from "next/font/local";
import styles from "./TeamCard.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

export default function TeamCard({name, role, image}) {
    return (
        <div className={styles.container}>
            {/* <div className={styles.image}> */}
                <img src={image} alt={name} className={styles.img} />
            {/* </div> */}
            <div className={cn(inter.className, styles.textContainer)}>
                <div className={cn(inter.className, styles.name)}>{name}</div>
                <div className={cn(jet.className, styles.role)}>{role}</div>
            </div>
        </div>
    );
}