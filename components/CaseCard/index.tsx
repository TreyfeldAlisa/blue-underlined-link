import React from "react";
import styles from "./CaseCard.module.css";
import cn from "classnames";
import localFonts from "next/font/local";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({
  src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf",
});
const chips = ["Live OCR", "Sports & esports event tracking systems"];

const CaseCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerImg} />
      <div className={styles.wrapper}>
        <h2 className={cn(inter.className, styles.subtitle)}>
          Completion date: OCT 31, 2020
        </h2>
        <h1 className={cn(inter.className, styles.title)}>
          CS:GO Sports Betting Algorithm
        </h1>
        <div className={styles.chipsContaner}>
          {chips.map((title, index) => (
            <div key={index} className={cn(jet.className, styles.frame)}>
              <div className={styles.frameText}>{title}</div>
            </div>
          ))}
          <div className={cn(inter.className, styles.textContainer)}>
            <div>Client's general request was the following:</div>
            <div>
              "We need a sports betting algorithm, which is able to calculate
              the expected amount of kills for a certain CS:GO player in an
              individual match-up based on map picks and the expected number of
              rounds in a match.
            </div>
            <div>
              {
                "The model has to include an interface, where we can put in different statistics (primarily which map and the expected number of rounds + the side they are on (Counter terrorists or terrorists)."
              }
            </div>
            <div>
              Oleg was in charge of building data aggregation system and
              interface for statistics, while data analyst Julia developed the
              required algorithm.
            </div>
            <div>
              The project was delivered in time and after testing client was
              satisfied with provided tool.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
