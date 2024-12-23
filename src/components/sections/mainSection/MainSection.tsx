import Image from "next/image";
import React from "react";
import { Header } from "../../header/Header";
import { useTranslations } from "next-intl";

interface HeaderProps {
    onOpenModal: () => void;
  }

const MainSection: React.FC<HeaderProps> = ({ onOpenModal }) => {
    const t = useTranslations("MainSection");
  return (
    <div className="bg-[#f3fffd] lg:min-h-[1000px] lg:pb-[300px] md:pb-[200px] pb-[220px]">
        <div className="bg-[url('/bg_truck.png')] bg-cover bg-center  h-screen relative">
            <Header onOpenModal={onOpenModal}/>
            <div className="flex flex-col items-center justify-center h-screen pb-[200px]">
                <h1 className="md:text-[40px] xl:text-[70px] lg:text-[50px] text-[40px] text-white text-center lg:w-[800px] md:w-[550px] w-[400px] mx-auto font-montserrat font-extrabold xl:leading-[90px] lg:leading-[60px]">{t('title')}</h1>
                <div className="xl:text-[30px] lg:text-[25px] md:text-[23px]  text-[20px] text-white text-center xl:w-[800px] lg:w-[600px] md:w-[550px] w-[400px] mx-auto md:mt-[40px] mt-[20px] font-medium ">{t('subtitle')}</div>
            </div>
        </div>
        <div className="relative">
            <div className="flex justify-center  gap-[80px] absolute lg:bottom-[-210px] md:bottom-[-150px] bottom-[-150px] left-[50%] translate-x-[-50%]">
                <div className="lg:w-[328px] lg:h-[254px] md:w-[250px] md:h-[200px] w-[140px] h-[180px] bg-white lg:p-[40px] md:p-[20px] flex flex-col items-center shadow-2xl">
                    <Image className="lg:w-[75px] lg:h-[75px] md:w-[65px] md:h-[65px]" src="/handshake.svg" alt="truck" width={75} height={75}/>
                    <div className="lg:text-[24px] md:text-[18px] text-[13px] font-[600] text-center text-black lg:leading-[32px] md:leading-[22px] mt-3">
                        {t('stats.0.text')}
                    </div>
                </div>
                <div className="lg:w-[328px] lg:h-[254px] md:w-[250px] md:h-[200px] w-[140px] h-[180px] bg-white  lg:p-[40px] md:p-[20px] flex flex-col items-center  shadow-2xl">
                    <Image className="lg:w-[75px] lg:h-[75px] md:w-[65px] md:h-[65px]" src="/truck.svg" alt="truck" width={75} height={75}/>
                    <div className="lg:text-[24px] md:text-[18px] text-[13px] font-[600] text-center text-black lg:leading-[32px] md:leading-[22px] md:w-[200px] mt-3">
                    {t('stats.1.text')}
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  );
}

export default MainSection