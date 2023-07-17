import React, { useState } from "react";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./Feedback.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

export default function HowWeCan() {
    const [value, setValue] = useState("");

    const truncate = (event) => {
        if (event) {
            const { value } = event.target;

            // const returnedValue =
            //         value.length > 24
            //             ? `...${value.substring(value.length - 24, value.length - 1)}`
            //             : value;

            const returnedValue =
                value.length > 5
                    ? `...${value.substring(value.length - 5, value.length - 1)}`
                    : value;

            setValue(returnedValue);

            if (value.includes(".")) {
                value.substring(3, value.length)
                setValue(value)
            }
        }
        return "";
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className={styles.input}
                    placeholder="Name"
                    onChange={truncate}
                    value={value}
                />
                <input type="phone" name="phone" className={styles.input} placeholder="Phone" />
                <input type="e-mail" name="mail" className={styles.input} placeholder="E-mail" />
                <input
                    type="input"
                    name="task"
                    className={cn(styles.input, styles.description)}
                    placeholder="Description"
                />
            </div>
            <button className={cn(inter.className, styles.button)}>Send</button>
        </div>
    );
}
