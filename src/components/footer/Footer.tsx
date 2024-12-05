import Image from "next/image";

const Footer = () => {
   return (
    <div className="bg-[#252b43] h-[400px] w-full mt-[130px] px-[215px] py-[25px]">
        <div className="flex justify-between text-white ">
            <div>
                <h2 className="text-[40px] font-bold leading-[57px]">Контакты</h2>
                <ol className="mt-[30px]">
                    <li className="flex justify-start items-center text-[28px] font-bold">
                        <Image src="/phone.svg" alt="phone" width={40} height={40}/><span className="ml-2">+7 (777) 777-77-77</span>
                    </li>
                    <li className="flex justify-start items-center mt-[35px] text-[28px] font-bold">
                        <Image src="/place.svg" alt="place" width={40} height={40}/><span className="ml-2">г. Москва, ул. Пушкинская, д. 1</span>
                    </li>
                    <li className="flex justify-start items-center mt-[35px] text-[28px] font-bold">
                        <Image src="/email.svg" alt="email" width={40} height={40}/><span className="ml-2">GtP9M@example.com</span>
                    </li>
                </ol>
            </div>
            <div>
                <h2 className="text-[40px] font-bold leading-[57px]">Наши соцсети</h2>
                <ol className="mt-[30px]">
                    <li className="flex justify-start items-center text-[28px] font-bold">
                        <Image src="/instagram.svg" alt="instagram" width={40} height={40}/><span className="ml-2">+7 (777) 777-77-77</span>
                    </li>
                    <li className="flex justify-start items-center mt-[35px] text-[28px] font-bold">
                        <Image src="/telegram.svg" alt="telegram" width={40} height={40}/><span className="ml-2">+7 (777) 777-77-77</span>
                    </li>
                    <li className="flex justify-start items-center mt-[35px] text-[28px] font-bold">
                        <Image src="/whatsapp.svg" alt="whatsapp" width={40} height={40}/><span className="ml-2">+7 (777) 777-77-77</span>
                    </li>
                </ol>
            </div>
        </div>
    </div>
   )
};

export default Footer
