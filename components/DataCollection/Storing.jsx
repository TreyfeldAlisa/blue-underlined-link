import React from "react";
import cn from "classnames";
// import img from 'next/img';
import localFonts from "next/font/local";
import styles from "./DataCollection.module.css";

// import storing from "../../public/video/3.mp4";
import substract from "../../public/image/Subtract.png"

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

export default function Storing() {
    return (
        <div className={styles.container} style={{ top: "80rem" }}>
            <div className={styles.imgContainer}>
                <div>
                    <img
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
                        className={cn(styles.video, "embed-responsive-item")}
                        src={require("../../public/video/3.mp4")}
                    />
                </div>
            </div>
            <div className={cn(inter.className, styles.textContainer)}>
                <div className={cn(jet.className, styles.h2)}>./SERVICES/</div>
                <div className={cn(inter.className, styles.h1)}>
                    storing_&_ <br /> delivery
                </div>
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
                                    Data visualization <br /> and dashboards
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
                                    <div className={styles.frameText}>Betting analysis</div>
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
                                    <div className={styles.frameText}>Betting analysis</div>
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
                                        Storage <br /> optimization
                                    </div>
                                    <div className={styles.roundButton}>
                                        <div className={styles.vector}>&rarr;</div>
                                    </div>
                                </div>
                                <div className={styles.frameVerticalContainer}>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>Trading metrics</div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Marketing and user analysis
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
                                        Complex <br /> content delivery <br /> and publishing
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
                    <div className={styles.overflow} style={{ top: "78vh" }}>
                        <div className={styles.gorizontalBlock}>
                            <div className={styles.blockTexContainer}>
                                <div className={cn(jet.className, styles.one)}>
                                    <div className={styles.point}></div>
                                    <div>04</div>
                                </div>
                                <div className={cn(inter.className, styles.header)}>
                                    Third party <br /> integrations
                                </div>
                                <div className={styles.roundButton}>
                                    <div className={styles.vector}>&rarr;</div>
                                </div>
                            </div>
                            <div className={styles.frameContainer}>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Marketing and domain analysis
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Live OCR</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Development of data collection services
                                    </div>
                                </div>
                                {/* для анимации */}
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Marketing and domain analysis
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Live OCR</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Development of data collection services
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
