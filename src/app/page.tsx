'use client'
import Image from "next/image";
import { Header } from "@/components/header/Header";
import MainSection from "@/components/sections/mainSection/MainSection";
import ServicesSection from "@/components/sections/servicesSection/ServicesSection";
import ProductSection from "@/components/sections/productSection/ProductSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    // <div>
    //   <Header/>
    // </div>
   <div>
    <MainSection/>
    <ServicesSection/>
    <ProductSection/>
    <Footer/>
   </div>
  );
}
