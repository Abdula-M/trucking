import Image from "next/image";
import { Header } from "../../header/Header";

export default function MainSection() {
  return (
    <div className="bg-[#f3fffd] h-[1193px] relative">
        <div className="bg-[url('/bg_truck.png')] bg-cover bg-center h-screen">
            <Header/>
            <h1 className="text-[70px] text-white text-center w-[850px] mx-auto mt-[133px] font-montserrat font-extrabold leading-[90px]">Цифровая платформа <br /> для грузоперевозок</h1>
            <div className="text-[30px] text-white text-center w-[800px] mx-auto mt-[40px] font-medium ">Экосистема сервисов для транспортной логистики<br />Экспорт | Импорт</div>
        </div>
        <div className="flex justify-center gap-[80px] absolute top-[875px] left-[50%] translate-x-[-50%]">
            <div className="w-[328px] h-[254px] bg-white p-[40px] flex flex-col items-center shadow-2xl">
                <Image src="/handshake.svg" alt="truck" width={75} height={75}/>
                <div className="text-[24px] font-[600] text-center text-black leading-[32px] mt-3">
                    Более 6 000 перевозчиков уже работают с нами
                </div>
            </div>
            <div className="w-[328px] h-[254px] bg-white  p-[40px] flex flex-col items-center shadow-2xl">
                <Image src="/truck.svg" alt="truck" width={75} height={75}/>
                <div className="text-[24px] font-[600] text-center text-black leading-[32px] mt-3">
                    Свыше 100 000 рейсов в год
                </div>
            </div>
        </div>
    </div>
   
  );
}
