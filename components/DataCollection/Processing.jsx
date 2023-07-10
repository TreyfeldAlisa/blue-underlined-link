import React from "react";
import cn from "classnames";
import Image from 'next/image';
import localFonts from "next/font/local";
import styles from "./DataCollection.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

export default function Processing() {
    return (
        <div className={styles.container} style={{ top: "60rem" }}>
            <div className={styles.imageContainer}>
                <div>
                    <Image
                        src="/image/Subtract.png"
                        alt="subtract"
                        className={styles.img}
                        width={1398}
                        height={8}
                    />
                </div>
                <div className="-mt-24">
                    <video
                        controls
                        autoPlay
                        playsInline
                        loop
                        muted
                        className={cn(styles.video, "embed-responsive-item")}
                    >
                        <source src={"/video/2.mp4"} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className={cn(inter.className, styles.textContainer)}>
                <div className={cn(jet.className, styles.h2)}>./SERVICES/</div>
                <div className={cn(inter.className, styles.h1)}>processing</div>
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
                                    Data insights and <br /> forecasting
                                </div>
                                <div className={styles.roundButton}>
                                    <div className={styles.vector}>&rarr;</div>
                                </div>
                            </div>
                            <div className={styles.frameContainer}>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Discover insights by analyzing multiple data sources
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Improve forecasting by applying ML solutions and statistical
                                        modeling
                                    </div>
                                </div>
                                {/* для анимации */}
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Discover insights by analyzing multiple data sources
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Improve forecasting by applying ML solutions and statistical
                                        modeling
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.verticalBlockContainer}>
                        <div className={styles.verticalOverflow}>
                            <div className={styles.verticalBlock}>
                                <div className={styles.blockTexContainer}>
                                    <div className={cn(jet.className, styles.one)}>
                                        <div className={styles.point}></div>
                                        <div>02</div>
                                    </div>
                                    <div className={cn(inter.className, styles.header, "mb-6")}>
                                        Natural
                                        <br /> language
                                        <br /> processing
                                    </div>
                                    <div className={styles.roundButton}>
                                        <div className={styles.vector}>&rarr;</div>
                                    </div>
                                </div>
                                <div className={styles.frameVerticalContainer}>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Customer care services
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>HR procedures</div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Customer care services
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>HR procedures</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.verticalOverflow}>
                            <div className={styles.verticalBlock}>
                                <div className={styles.blockTexContainer}>
                                    <div className={cn(jet.className, styles.one)}>
                                        <div className={styles.point}></div>
                                        <div>03</div>
                                    </div>
                                    <div className={cn(inter.className, styles.header, "mb-6")}>
                                        Ecommerce <br />
                                        automation
                                    </div>
                                    <div className={styles.roundButton}>
                                        <div className={styles.vector}>&rarr;</div>
                                    </div>
                                </div>
                                <div className={styles.frameVerticalContainer}>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            In-game items trading platforms and bots
                                        </div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            In-game items trading platforms and bots
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.overflow}>
                        <div className={styles.gorizontalBlock}>
                            <div className={styles.blockTexContainer}>
                                <div className={cn(jet.className, styles.one)}>
                                    <div className={styles.point}></div>
                                    <div>04</div>
                                </div>
                                <div className={cn(inter.className, styles.header)}>
                                    Data driven <br /> marketing
                                </div>
                                <div className={styles.roundButton}>
                                    <div className={styles.vector}>&rarr;</div>
                                </div>
                            </div>
                            <div className={styles.frameContainer}>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Live OCR</div>
                                </div>
                                <div
                                    className={cn(jet.className, styles.frame)}

                                >
                                    <div className={styles.frameText}>
                                        Marketing and domain analysis
                                    </div>
                                </div>
                                <div
                                    className={cn(jet.className, styles.frame)}

                                >
                                    <div className={styles.frameText}>
                                        Development of data collection services
                                    </div>
                                </div>
                                <div
                                    className={cn(jet.className, styles.frame)}

                                >
                                    <div className={styles.frameText}>
                                        Integration of digital marketing services
                                    </div>
                                </div>
                                {/* для анимации */}
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Live OCR</div>
                                </div>
                                <div
                                    className={cn(jet.className, styles.frame)}

                                >
                                    <div className={styles.frameText}>
                                        Marketing and domain analysis
                                    </div>
                                </div>
                                <div
                                    className={cn(jet.className, styles.frame)}

                                >
                                    <div className={styles.frameText}>
                                        Development of data collection services
                                    </div>
                                </div>
                                <div
                                    className={cn(jet.className, styles.frame)}

                                >
                                    <div className={styles.frameText}>
                                        Integration of digital marketing services
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
