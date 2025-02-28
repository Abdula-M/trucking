import Image from "next/image";

interface PostCardProps {
    image: string;
    title: string;
    btn: string;
    description: string;
    onOpenModal: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ image, title, description, btn, onOpenModal }) => {
  return (
    <div className="xl:w-[1100px] xl:h-[500px] lg:w-[900px] lg:h-[390px] md:w-[680px] md:h-[280px] w-[370px] min-h-[200px] bg-white lg:p-[75px] md:p-[40px] p-[22px] flex flex-col items-start shadow-xl rounded-[20px] md:mt-[98px] mt-[70px] overflow-hidden relative ">
        <Image className="xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[180px] h-[180px] absolute top-0 md:right-0 right-[-20px]" src={image} alt={title} width={500} height={500}/>
        <div className="xl:text-[31px] lg:text-[25px] md:text-[20px] text-[14px] md:w-[400px] lg:w-[550px] xl:w-[600px] w-[240px] font-[600] text-start text-[#252b43] xl:leading-[46px] lg:leading-[30px]">{title}</div>
        <div className="md:w-[700px] w-[250px] xl:text-[24px] lg:text-[20px] md:text-[16px] text-[14px] font-[400] text-start text-[#252b43] xl:leading-[70px] lg:leading-[45px] md:leading-[26px] mt-[15px] opacity-90" dangerouslySetInnerHTML={{ __html: description }} />
        <div>
            <button onClick={() => onOpenModal()} className="md:mt-[25px] mt-[15px] bg-[#05caa5] xl:w-[180px] lg:w-[150px] xl:h-[60px] lg:h-[45px] md:w-[120px] md:h-[40px] w-[100px] h-[30px] lg:text-[22px] md:text-[14px] text-[14px] rounded-full text-white font-bold hover:bg-[#05caa5]/80 active-transform active:scale-95">{btn}</button>
        </div>
    </div>
   
  );
}

export default PostCard