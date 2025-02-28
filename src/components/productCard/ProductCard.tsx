import Image from "next/image";

interface ProductProps {
    image: string;
    title: string;
    description: string;
}

const ProductCard: React.FC<ProductProps> = ({ image, title, description }) => {
  return (
    <div className="flex md:flex-row flex-col items-centre xl:w-[1110px] xl:h-[650px] lg:w-[800px] lg:h-[450px] md:w-[580px] md:h-[350px] w-[320px] h-[400px] bg-white shadow-xl rounded-[20px] relative mx-auto">
        <div className="xl:w-[555px] xl:px-[50px] xl:py-[100px] lg:px-[30px] md:px-[25px] my-auto">
                <Image className="my-auto mx-auto rounded-[20px] xl:w-[450px] xl:h-[450px] lg:w-[350px] lg:h-[350px] md:w-[250px] md:h-[250px] w-full h-[200px] object-cover " src={image} alt={title} width={450} height={450}/>
        </div>
        <div className="z-10 xl:mt-[170px] lg:mt-[100px] md:mt-[60px] mt-0 xl:px-[50px] lg:px-[30px] md:px-[10px] md:pr-[25px] p-[20px] pt-0 md:w-1/2">
            <div className="lg:text-[25px] md:text-[18px] font-[600] text-start text-[#252b43] lg:leading-[28px] md:leading-[25px] xl:leading-[48px] leading-[22px]">{title}</div>
            <div className="lg:text-[20px] md:text-[16px] text-[14px] font-[400] text-start text-[#252b43] xl:leading-[42px] lg:leading-[32px]  lg:mt-[10px] md:mt-[2px] opacity-90" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="md:block hidden absolute top-0 right-0 bottom-0 bg-[#05caa5] w-1/2 inset-y-0 rounded-r-[20px]"></div>
    </div>
   
  );
}

export default ProductCard