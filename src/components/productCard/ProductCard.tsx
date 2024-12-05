import Image from "next/image";

interface ProductProps {
    image: string;
    title: string;
    description: string;
}

const ProductCard: React.FC<ProductProps> = ({ image, title, description }) => {
  return (
    <div className="flex items-centre w-[1110px] h-[650px] bg-white shadow-xl rounded-[20px] relative mx-auto">
        <div className="w-[555px] px-[50px] py-[100px] my-auto">
                <Image className="rounded-[20px] w-[450px] h-[450px] object-cover " src={image} alt={title} width={450} height={450}/>
        </div>
        <div className="z-10 mt-[170px] px-[50px]">
            <div className="text-[29px] font-[600] text-start text-[#252b43] leading-[48px]">{title}</div>
            <div className="text-[14px] font-[400] text-start text-[#252b43] leading-[42px] mt-[10px] opacity-90" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="absolute top-0 right-0 bg-[#05caa5] w-1/2 inset-y-0 rounded-r-[20px]"></div>
    </div>
   
  );
}

export default ProductCard