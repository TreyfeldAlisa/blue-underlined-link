/* Components */
import Background from "@/components/Background/Background";
import Footer from "@/components/Footer/Footer.jsx";
import NavbarAllWorks from "@/components/Navbar/NavbarAllWorks";
import Works from "@/components/Works/Works";
import LetsTalk from "@/components/Works/LetsTalk";

export default function AllWorks() {
  return (
    <div className="allworks">
      <Background />
        <NavbarAllWorks shouldBeWithLinks />
        <Works />
        <LetsTalk />
        <Footer />
    </div>
  );
}
