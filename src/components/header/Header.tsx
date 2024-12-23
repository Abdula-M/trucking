import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import  LanguageSwitcher  from "../languageSwitcher/LanguageSwitcher";

interface HeaderProps {
    onOpenModal: () => void;
  }

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
    const t = useTranslations("Header");
   return (
    <div className="md:py-7 py-4 md:px-[50px] px-[20px]">
        <ol className="flex justify-between items-center">
            <li><Image className="md:w-[76px] md:h-[40px] lg:w-[83px] lg:h-[40px] xl:w-[93px] xl:h-[48px] w-[60px] h-[40px]" src="/logo.svg" alt="logo" width={93} height={48}/></li>
            <div className="flex  md:flex-row justify-between items-center md:gap-7 gap-3">
                <li><LanguageSwitcher /></li>
                <li>
                    <button onClick={() => onOpenModal()} className="test md:block hidden md:h-[42px] md:w-[152px] lg:w-[178px] xl:h-[52px] lg:h-[40px] h-[30px] w-[160px] bg-[#05caa5] rounded-[6px] text-white md:text-[16px] text-[16px] font-bold">
                        {t('orderL')}
                    </button>
                    <button onClick={() => onOpenModal()} className="md:hidden block h-[30px] w-[85px] bg-[#05caa5] rounded-[6px] text-white md:text-[16px] text-[16px] font-bold">
                        {t('order')}
                    </button>
                </li>
            </div>
            
        </ol>
    </div>
   )
};
