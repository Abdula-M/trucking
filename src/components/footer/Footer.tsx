import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");
   return (
    <div className="bg-[#252b43] xl:h-[400px] lg:h-[300px] md:h-[200px] w-full xl:px-[215px] lg:px-[115px] md:px-[50px] md:py-[25px] px-[20px] py-[15px]">
        <div className="flex justify-between text-white">
            <div>
                <h2 className="xl:text-[40px] lg:text-[30px] md:text-[20px] font-bold leading-[57px]">{t('left')}</h2>
                <ol className="xl:mt-[30px] lg:mt-[20px]">
                    <li className="flex justify-start items-center xl:text-[28px] lg:text-[20px] md:text-[14px] text-[12px] font-bold">
                        <Image className="xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px] w-[20px] h-[20px]" src="/phone.svg" alt="phone" width={40} height={40}/><span className="ml-2">158 5791 3337</span>
                    </li>
                    <li className="flex justify-start items-center xl:mt-[25px] lg:mt-[20px] md:mt-[10px] xl:text-[28px] lg:text-[20px] md:text-[14px] text-[12px]  font-bold xl:w-[515px] lg:w-[315px] md:w-[280px] w-[200px] ">
                        <Image className="xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px] w-[20px] h-[20px]" src="/place.svg" alt="place" width={40} height={40}/><span className="ml-2">{t('place')}</span>
                    </li>
                    <li className="flex justify-start items-center xl:mt-[25px] lg:mt-[20px] md:mt-[10px] xl:text-[28px] lg:text-[20px] md:text-[14px] text-[12px] font-bold">
                        <Image className="xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px] w-[20px] h-[20px]" src="/email.svg" alt="email" width={40} height={40}/>
                        <span className="ml-2">
                        <a href="mailto:max8108@mail.ru">max8108@mail.ru</a>
                        </span>
                    </li>
                </ol>
            </div>
            <div>
                <h2 className="xl:text-[40px] lg:text-[30px] md:text-[20px] font-bold leading-[57px]">{t('right')}</h2>
                <ol className="xl:mt-[30px] lg:mt-[20px] ">
                    <li className="flex justify-start items-center xl:text-[28px] lg:text-[20px] md:text-[14px] text-[12px] font-bold">
                        <Image className="xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px] w-[20px] h-[20px] " src="/wechat.svg" alt="wechat" width={40} height={40}/>
                        <span className="ml-2"><a href="tel:+8615857913337">+8615857913337</a></span>
                    </li>
                    <li className="flex justify-start items-center xl:mt-[35px] lg:mt-[20px] md:mt-[10px] mt-[10px] xl:text-[28px] lg:text-[20px] md:text-[14px] text-[12px] font-bold">
                        <Image className="xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px] w-[20px] h-[20px] " src="/whatsapp.svg" alt="whatsapp" width={40} height={40}/>
                        <span className="ml-2"><a href="tel:+79880224444">+7 988 022 44 44</a> </span>
                    </li>
                </ol>
            </div>
        </div>
    </div>
   )
};

export default Footer
