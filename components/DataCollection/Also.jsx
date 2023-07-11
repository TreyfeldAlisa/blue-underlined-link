import React from "react";
import cn from "classnames";
import Image from 'next/image';
import localFonts from "next/font/local";
import styles from "./DataCollection.module.css";
import substract from "../../public/image/Subtract.png";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

export default function Also() {
    return (
        <div className={styles.container} style={{ top: "110rem" }}>
            <div className={styles.imageContainer}>
                <div>
                    <Image
                        src={substract}
                        alt="subtract"
                        className={styles.img}
                        width={1398}
                        height={8}
                    />
                </div>
                <div className="ms-16 -mt-24">
                    <video
                        controls
                        autoPlay
                        playsInline
                        loop
                        muted
                        className={cn(styles.video, styles.also, "embed-responsive-item")}
                        src={require('../../public/video/4.mp4')}
                    />
                </div>
            </div>
            <div className={cn(inter.className, styles.textContainer)}>
                <div className={cn(jet.className, styles.h2)}>./SERVICES/</div>
                <div className={cn(inter.className, styles.h1)}>also</div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.blockContainer}>
                    <div className={styles.overflow}>
                        <div className={styles.gorizontalBlock}>
                            <div className={styles.blockTexContainer}>
                                <div className={cn(jet.className, styles.one)}>
                                    <div className={styles.point}></div>
                                    <div>01</div>
                                </div>
                                <div className={cn(inter.className, styles.header)}>
                                    Project evaluation
                                </div>
                                <div className={styles.roundButton}>
                                    <div className={styles.vector}>&rarr;</div>
                                </div>
                            </div>
                            <div className={styles.frameContainer}>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Trading metrics</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Marketing and user analysis
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Infrastructure monitoring and IoT
                                    </div>
                                </div>
                                {/* для анимации */}
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Trading metrics</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Marketing and user analysis
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Infrastructure monitoring and IoT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.verticalBlockContainer}>
                        <div className={styles.verticalOverflow}>
                            {" "}
                            <div className={styles.verticalBlock}>
                                <div className={styles.blockTexContainer}>
                                    <div className={cn(jet.className, styles.one)}>
                                        <div className={styles.point}></div>
                                        <div>02</div>
                                    </div>
                                    <div className={cn(inter.className, styles.header, "mb-6")}>
                                        Devops <br /> consulting
                                    </div>
                                    <div className={styles.roundButton}>
                                        <div className={styles.vector}>&rarr;</div>
                                    </div>
                                </div>
                                <div className={styles.frameVerticalContainer}>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            DevOps checks whether the software contains
                                            vulnerabilities through static and dynamic tests, fuzz
                                            testing, and dependency scanning
                                        </div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            DevOps checks whether the software contains
                                            vulnerabilities through static and dynamic tests, fuzz
                                            testing, and dependency scanning
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.verticalOverflow}>
                            {" "}
                            <div className={styles.verticalBlock}>
                                <div className={styles.blockTexContainer}>
                                    <div className={cn(jet.className, styles.one)}>
                                        <div className={styles.point}></div>
                                        <div>03</div>
                                    </div>
                                    <div className={cn(inter.className, styles.header, "mb-6")}>
                                        CTO/IT as a <br /> service
                                    </div>
                                    <div className={styles.roundButton}>
                                        <div className={styles.vector}>&rarr;</div>
                                    </div>
                                </div>
                                <div className={styles.frameVerticalContainer}>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Building the strategy and product roadmap will help you
                                            achieve the company’s objectives based on the market
                                            situation and resources at hand
                                        </div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Building the strategy and product roadmap will help you
                                            achieve the company’s objectives based on the market
                                            situation and resources at hand
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.overflow} style={{ top: "78vh" }}>
                        <div className={styles.gorizontalBlock}>
                            <div className={styles.blockTexContainer}>
                                <div className={cn(jet.className, styles.one)}>
                                    <div className={styles.point}></div>
                                    <div>04</div>
                                </div>
                                <div className={cn(inter.className, styles.header)}>
                                    Mathematical modeling
                                </div>
                                <div className={styles.roundButton}>
                                    <div className={styles.vector}>&rarr;</div>
                                </div>
                            </div>
                            <div className={styles.frameContainer}>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        DevOps checks whether the software contains vulnerabilities
                                        through static and dynamic tests, fuzz testing, and
                                        dependency scanning
                                    </div>
                                </div>
                                {/* для анимации */}
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        DevOps checks whether the software contains vulnerabilities
                                        through static and dynamic tests, fuzz testing, and
                                        dependency scanning
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
