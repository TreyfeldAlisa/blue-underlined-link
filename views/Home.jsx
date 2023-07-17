import React from "react";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Data from "@/components/DataCollection/Data";
import Processing from "@/components/DataCollection/Processing";
import Storing from "@/components/DataCollection/Storing";
import Also from "@/components/DataCollection/Also";
import Team from "@/components/Team/Team";
import HomePageLayout from "@/layouts/HomePageLayout";

export default function Main() {
  return (
    <HomePageLayout>
      <Home />
       <About />
        <Data />
        <Processing />
        <Storing />
        <Also />
        <Team />
    </HomePageLayout>
  );
}
