import React from "react";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./Home.module.css";
import Image from "next/image";

// import gif from "../../public/image/ezgif.com-gif-maker.gif";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

export default function Home() {
    return (
        <div className={cn(styles.mainPage)} id="home">
            <div className={cn(styles.textContainer, "-my-32")}>
                <p className={cn(inter.className, styles.textTitle)}>
                    blue <br /> underlined link
                </p>
            </div>
            <div className={cn(styles.container)}>
                <div className={cn(styles.videoContainer)}>
                    <div className="overflow-hidden">
                        <Image
                            className={styles.video}
                            src={'../../public/image/ezgif.com-gif-maker.gif'}
                            alt="gif"
                            width={72}
                            height={72}
                        />
                    </div>
                    <div className={cn(jet.className, styles.text)}>
                        There is some data behind links on the web
                    </div>
                </div>
                <div className={cn(styles.videoContainer)}>
                    <div className="overflow-hidden">
                        <Image
                            className={styles.video}
                            src={'../../public/image/ezgif.com-gif-maker.gif'}
                            alt="gif"
                            width={72}
                            height={72}
                        />
                    </div>

                    <div className={cn(jet.className, styles.text)}>
                        We build processes
                        <br />
                        for this data
                    </div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={cn(styles.button, inter.className)}>Contact us</button>
            </div>
        </div>
    );
}
