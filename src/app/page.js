import Footer from "@/components/common/Footer";
import About from "@/components/home/About";
import Collection from "@/components/home/Collection";
import Company from "@/components/home/Company";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import Offer from "@/components/home/Offer";
import Products from "@/components/home/Products";
import Request from "@/components/home/Request";
import Slider from "@/components/home/Slider";
import Testimonal from "@/components/home/Testimonal";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    {/* <Hero/>
    <Company/>
    <Collection/>
    <Offer/> 
    <Products/> 
    <Feature/>  
    <About/>
    <Request/> */}
 <Slider/>
 <Testimonal/>
    <Footer/>
   </div>
  );
}
