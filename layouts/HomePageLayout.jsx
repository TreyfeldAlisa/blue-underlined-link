import Background from "@/components/Background/Background";
// import CanvasScene from "@/components/Canvas/Scene";
import LogoGitHub from "@/components/Canvas/LogoGitHub";
import Footer from "@/components/Footer/Footer";
import NavBarMinimal from "@/components/Navbar/NavBarMinimal";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const HomePageLayout = ({ children }) => {
  return (
    <>
      <Background />
      <NavBarMinimal />
{/*       <CanvasScene /> */}
      <LogoGitHub />
      <div
        style={{
          width: "95%",
          background: "black",
          margin: "0 auto",
          paddingTop: "59px",
        }}
      >
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default HomePageLayout;
