import React from "react";
import cn from "classnames";
import Image from "next/image";
import localFonts from "next/font/local";
import styles from "./Team.module.css";
import team1 from "../../public/image/team1.png";
import team2 from "../../public/image/team2.png";
import team3 from "../../public/image/team3.png";
import team4 from "../../public/image/team4.png";

import TeamCard from "./TeamCard";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });

export default function Team() {
    return (
        <div className={styles.container} id="team">
            <div className={cn(inter.className, styles.h1)}>
                Our <br /> team
            </div>
            <div className={styles.imageBlockLeft}>
                <TeamCard
                    name="Konstantin Konstantinopolsky"
                    role="Business manager"
                    image={team1}
                />
                <TeamCard name="Konstantin Konstantinopolsky" role="CTO " image={team2} />
            </div>
            <div className={styles.imageBlockRight}>
                <TeamCard
                    name="Konstantin Konstantinopolsky"
                    role="Business managers"
                    image={team3}
                />
                <TeamCard
                    name="Konstantin Konstantinopolsky"
                    role="Business managers"
                    image={team4}
                />
            </div>
            <button className={cn(inter.className, styles.button)}>
                Show all members{" "}
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
