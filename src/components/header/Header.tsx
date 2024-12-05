import Image from "next/image";
export const Header = () => {
   return (
    <div className="py-7 px-24">
        <ol className="flex justify-between items-center">
            <li><Image src="/logo.svg" alt="logo" width={93} height={48}/></li>
            <li className="rounded-[6px] border-2 border-[#05caa5] relative">
                <Image className="absolute top-[12px] left-3" src="/Search.svg" alt="search" width={20} height={20}/>
                <input className="font-bold w-[400px] h-[45px] rounded-[6px] border-0 outline-0 bg-transparent cursor-text pl-10  text-white" type="text" />
                <button className="w-[95px] h-[45px] bg-[#05caa5]  text-white font-bold">Найти</button>
            </li>
            <li><button className="w-[178px] h-[52px] bg-[#05caa5] rounded-[6px] text-white font-bold">Регистрация</button></li>
        </ol>
    </div>
   )
};
