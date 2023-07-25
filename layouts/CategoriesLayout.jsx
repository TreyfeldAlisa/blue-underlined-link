import React from "react";
import LetsTalk from "@/components/Works/LetsTalk";
import NavBarMinimal from "@/components/Navbar/NavBarMinimal";
import Background from "@/components/Background/Background";
import Footer from "@/components/Footer/Footer.jsx";
import NavbarAllWorks from "@/components/Navbar/NavbarAllWorks";

const CategoriesLayout = ({ children, shouldBeWithLinks }) => {
  return (
    <>
      <Background />
      <NavbarAllWorks shouldBeWithLinks={shouldBeWithLinks} />
      <NavBarMinimal />
      {children}
      <LetsTalk />
      <Footer isCategories={true} />
    </>
  );
};

export default CategoriesLayout;
