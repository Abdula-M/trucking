import Image from "next/image";

interface PostCardProps {
    image: string;
    title: string;
    description: string;
}

const PostCard: React.FC<PostCardProps> = ({ image, title, description }) => {
  return (
    <div className="w-[1100px] h-[650px] bg-white  p-[75px] flex flex-col items-start shadow-xl rounded-[20px] mt-[98px] relative">
        <Image className="absolute top-0 right-0" src={image} alt={title} width={500} height={500}/>
        <div className="text-[31px] font-[600] text-start text-[#252b43] leading-[46px]">{title}</div>
        <div className="w-[700px] text-[24px] font-[400] text-start text-[#252b43] leading-[70px] mt-[15px] opacity-90" dangerouslySetInnerHTML={{ __html: description }} />
        <div>
            <button className="mt-[25px] bg-[#05caa5] w-[180px] h-[60px] rounded-full text-white font-bold hover:bg-[#05caa5]/80 active-transform active:scale-95">Подробнее</button>
        </div>
    </div>
   
  );
}

export default PostCard