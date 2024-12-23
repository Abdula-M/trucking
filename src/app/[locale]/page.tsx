'use client'
import React from "react";
import ModalForm from "@/components/modalForm/ModalForm";
import MainSection from "@/components/sections/mainSection/MainSection";
import ServicesSection from "@/components/sections/servicesSection/ServicesSection";
import ProductSection from "@/components/sections/productSection/ProductSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
   <div>
    <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    <MainSection onOpenModal={openModal} />
    <ServicesSection onOpenModal={openModal}/>
    <ProductSection/>
    <Footer/>
   </div>
  );
}
