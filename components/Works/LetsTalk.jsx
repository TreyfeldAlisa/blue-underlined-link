import React from "react";
import cn from "classnames";
import Image from "next/image";
import localFonts from "next/font/local";
import styles from "./LetsTalk.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

export default function LetsTalk() {
    return (
        <div className={styles.container} id="works">
            <div className={styles.header}>
                <div className={cn(inter.className, styles.h1)}>All works</div>
                <div className={cn(inter.className, styles.textContainer)}>
                    <div className={cn(inter.className, styles.text)}>
                        Here we have collected all our works. Use the menu to navigate through
                        categories
                    </div>
                </div>
            </div>

            <div className={styles.cardContainer}>
                <div className={cn(styles.bigCard, styles.card1)}>
                    <div className={styles.background}>
                        <div className={cn(jet.className, styles.one)}>
                            <div className={styles.point}></div>
                            <div>01</div>
                        </div>
                        <div className={cn(inter.className, styles.cardHeader)}>
                            CS:GO Sports Betting Algorithm
                        </div>
                    </div>
                </div>

                <div className={styles.twoCards}>
                    <div className={cn(styles.smallCard, styles.card2)}>
                        <div className={styles.background}>
                            <div className={cn(jet.className, styles.one)}>
                                <div className={styles.point}></div>
                                <div>02</div>
                            </div>
                            <div className={cn(inter.className, styles.smallCardHeader)}>
                                CS:GO Sports Betting Algorithm
                            </div>
                        </div>
                    </div>

                    <div className={cn(styles.smallCard, styles.card3)}>
                        <div className={styles.background}>
                            <div className={cn(jet.className, styles.one)}>
                                <div className={styles.point}></div>
                                <div>03</div>
                            </div>
                            <div className={cn(inter.className, styles.smallCardHeader)}>
                                CS:GO Sports Betting Algorithm
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.twoCards}>
                    <div className={cn(styles.smallCard, styles.card4)}>
                        <div className={styles.background}>
                            <div className={cn(jet.className, styles.one)}>
                                <div className={styles.point}></div>
                                <div>04</div>
                            </div>
                            <div className={cn(inter.className, styles.smallCardHeader)}>
                                CS:GO Sports Betting Algorithm
                            </div>
                        </div>
                    </div>

                    <div className={cn(styles.smallCard, styles.card5)}>
                        <div className={styles.background}>
                            <div className={cn(jet.className, styles.one)}>
                                <div className={styles.point}></div>
                                <div>05</div>
                            </div>
                            <div className={cn(inter.className, styles.smallCardHeader)}>
                                CS:GO Sports Betting Algorithm
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.cardContainer}>
                <div className={cn(styles.bigCard, styles.card6)}>
                    <div className={styles.background}>
                        <div className={cn(jet.className, styles.one)}>
                            <div className={styles.point}></div>
                            <div>06</div>
                        </div>
                        <div className={cn(inter.className, styles.cardHeader)}>
                            CS:GO Sports Betting Algorithm
                        </div>
                    </div>
                </div>

                <div className={styles.twoCards}>
                    <div className={cn(styles.smallCard, styles.card7)}>
                        <div className={styles.background}>
                            <div className={cn(jet.className, styles.one)}>
                                <div className={styles.point}></div>
                                <div>07</div>
                            </div>
                            <div className={cn(inter.className, styles.smallCardHeader)}>
                                CS:GO Sports Betting Algorithm
                            </div>
                        </div>
                    </div>

                    <div className={cn(styles.smallCard, styles.card3)}>
                        <div className={styles.background}>
                            <div className={cn(jet.className, styles.one)}>
                                <div className={styles.point}></div>
                                <div>08</div>
                            </div>
                            <div className={cn(inter.className, styles.smallCardHeader)}>
                                CS:GO Sports Betting Algorithm
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.twoCards}>
                    <div className={cn(styles.smallCard, styles.card5)}>
                        <div className={styles.background}>
                            <div className={cn(jet.className, styles.one)}>
                                <div className={styles.point}></div>
                                <div>09</div>
                            </div>
                            <div className={cn(inter.className, styles.smallCardHeader)}>
                                CS:GO Sports Betting Algorithm
                            </div>
                        </div>
                    </div>

                    <div className={cn(styles.smallCard, styles.card10)}>
                        <div className={styles.background}>
                            <div className={cn(jet.className, styles.one)}>
                                <div className={styles.point}></div>
                                <div>10</div>
                            </div>
                            <div className={cn(inter.className, styles.smallCardHeader)}>
                                CS:GO Sports Betting Algorithm
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className={cn(inter.className, styles.button)}>
                Show more
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M4.50195 9.93848L11.1904 16.7764C11.4189 17.0225 11.6914 17.1367 11.999 17.1367C12.3066 17.1367 12.5879 17.0137 12.8164 16.7764L19.4961 9.93848C19.6895 9.74512 19.7949 9.49902 19.7949 9.20898C19.7949 8.62012 19.3379 8.16309 18.7578 8.16309C18.4766 8.16309 18.2041 8.26855 18.002 8.47949L12.0078 14.6406L5.99609 8.47949C5.80273 8.27734 5.53027 8.16309 5.24023 8.16309C4.66016 8.16309 4.20312 8.62012 4.20312 9.20898C4.20312 9.49023 4.30859 9.74512 4.50195 9.93848Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    );
}
