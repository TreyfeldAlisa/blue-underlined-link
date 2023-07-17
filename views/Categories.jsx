import Background from "@/components/Background/Background";
import Footer from "@/components/Footer/Footer";
import LetsTalk from "@/components/Works/LetsTalk";
import Works from "@/components/Works/Works";
import React from "react";
import styles from "../components/Background/Background.module.css";
import cn from "classnames";
import Navbar from "@/components/Navbar/NavbarCategory";

const Categories = () => {
  return (
    <div className="allworks">
      <div className={styles.videoContainer}>
        <video
          controls
          autoPlay
          playsInline
          loop
          muted
          className={cn(styles.video, "embed-responsive-item")}
          src={require("../public/video/ASCII.mp4")}
        />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Categories;
