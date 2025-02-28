import Image from "next/image";

interface ServiceProps {
    image: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ image, title, description }) => {
  return (
    <div className="xl:w-[430px] xl:h-[350px] lg:w-[330px] lg:h-[250px] md:w-[290px] md:h-[230px] w-[290px] min-h-[230px]  bg-white xl:p-[40px] lg:p-[20px] md:p-[25px] p-[20px] flex flex-col items-center justify-center shadow-xl rounded-[20px]">
        <Image className=" xl:w-[110px] xl:h-[110px] lg:w-[70px] lg:h-[70px] md:w-[50px] md:h-[50px] w-[70px] h-[70px]" src={image} alt={title} width={110} height={110}/>
        <div className="lg:text-[18px] md:text-[16px] text-[18px] font-[600] text-center text-[#252b43] leading-[24px] xl:mt-[20px] lg:mt-[18px] md:mt-[10px] mt-2">{title}</div>
        <div className="lg:text-[14px] md:text-[12px] text-[14px] font-[400] text-center text-[#252b43] leading-[20px] lg:mt-[10px] md:mt-[7px] mt-2 opacity-70" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
   
  );
}

export default ServiceCard