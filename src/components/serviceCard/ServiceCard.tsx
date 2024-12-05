import Image from "next/image";

interface ServiceProps {
    image: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ image, title, description }) => {
  return (
    <div className="w-[430px] h-[350px] bg-white  p-[40px] flex flex-col items-center shadow-xl rounded-[20px]">
        <Image src={image} alt={title} width={110} height={110}/>
        <div className="text-[18px] font-[600] text-center text-[#252b43] leading-[24px] mt-[30px]">{title}</div>
        <div className="text-[14px] font-[400] text-center text-[#252b43] leading-[20px] mt-[10px] opacity-70" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
   
  );
}

export default ServiceCard