import React from "react";
import CTA from "../../feature/home/components/CTA";
import Category from "../../feature/home/components/category";
import CTA2 from "../../feature/home/components/CTA2";
import Slider1 from "../../feature/home/components/Slider1";
import Slider2 from "../../feature/home/components/Slider2";
import GiftsPicks from "../../feature/home/components/GiftsPicks";
import Slider3 from "../../feature/home/components/Slider3";
import Services from "../../feature/home/components/Services";
import Footer from "../../sheard/components/Footer";

function Home() {
  return (
    <div>
      <CTA />
      <Category />
      <CTA2 />
      <Slider1 />
      <Slider2 />
      <GiftsPicks />
      <Slider3 />
      <Services />
    </div>
  );
}

export default Home;
