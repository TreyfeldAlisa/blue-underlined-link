import React from 'react';

/* Components */
import Background from "@/components/Background/Background";
import CanvasScene from "@/components/Canvas/Scene";
import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About"
import Data from "@/components/DataCollection/Data"
import Processing from "@/components/DataCollection/Processing"
import Storing from "@/components/DataCollection/Storing"
import Also from "@/components/DataCollection/Also"
import Team from "@/components/Team/Team"
import HowWeCan from "@/components/How/How"
import Feedback from "@/components/Feedback/Feedback"
import Footer from "@/components/Footer/Footer.jsx"

export default function Main() {
    return (
        <div className="page">
            <Background />
            {/* <CanvasScene /> */}
            <Home />
            <Navbar />
            <About />
            <Data />
            <Processing />
            <Storing />
            <Also />
            <Team />
            <HowWeCan />
            <Feedback />
            <Footer />
        </div>
    );
}
