import React from "react";
import cn from "classnames";
import localFonts from "next/font/local";
import Image from 'next/image';
import styles from "./DataCollection.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

import substract from "../../public/image/Subtract.png";

export default function Data() {
    return (
        <div className={styles.container} id="services" style={{ top: "50rem" }}>
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
                <div>
                    <video
                        controls
                        autoPlay
                        playsInline
                        loop
                        muted
                        className={styles.video}
                        src={require("../../public/video/1.mp4")}
                    />
                </div>
            </div>
            <div className={cn(inter.className, styles.textContainer)}>
                <div className={cn(jet.className, styles.h2)}>./SERVICES/</div>
                <div className={cn(inter.className, styles.h1)}>
                    data_gener <br /> ation_&_coll <br />
                    ection
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.blockContainer}>
                    <div className={styles.overflow}>
                        <div className={styles.gorizontalBlock}>
                            <div className={styles.blockTexContainer}>
                                <div className={cn(jet.className, styles.one)}>
                                    <div className={styles.point}></div>
                                    <div className={cn(styles.figure, jet.className)}>01</div>
                                </div>
                                <div className={cn(inter.className, styles.header)}>
                                    Computer vision
                                </div>
                                <div className={styles.roundButton}>
                                    <div className={styles.vector}>&rarr;</div>
                                </div>
                            </div>
                            <div className={styles.frameContainer}>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Live OCR</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Video motion analysis</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        3D modeling based on video streams
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Sports & esports event tracking systems
                                    </div>
                                </div>
                                {/* для анимации */}
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Live OCR</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Video motion analysis</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        3D modeling based on video streams
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Sports & esports event tracking systems
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
                                        Data <br /> scraping
                                    </div>
                                    <div className={styles.roundButton}>
                                        <div className={styles.vector}>&rarr;</div>
                                    </div>
                                </div>
                                <div className={styles.frameVerticalContainer}>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Price and stock monitoring
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Market research and analytics
                                        </div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Price and stock monitoring
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Market research and analytics
                                        </div>
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
                                        Protection <br />
                                        bypassing
                                    </div>
                                    <div className={styles.roundButton}>
                                        <div className={styles.vector}>&rarr;</div>
                                    </div>
                                </div>
                                <div className={styles.frameVerticalContainer}>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Price and stock monitoring
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Market research and analytics
                                        </div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Price and stock monitoring
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Market research and analytics
                                        </div>
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
