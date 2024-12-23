import ServiceCard from "@/components/serviceCard/ServiceCard";
import PostCard from "@/components/postCard/PostCard";
import { useTranslations } from "next-intl";

interface ServicesSectionProps {
    onOpenModal: () => void;
  }

export default function ServicesSection({ onOpenModal }: ServicesSectionProps) {
    const t = useTranslations("ServicesSection");
  return (
    <div className="bg-[#f3fffd] h-full ">
        <div className="bg-[#f3fffd] xl:h-[1133px] lg:h-[900px] relative xl:px-[230px] lg:px-[130px]">
            <h2 className="p-6 md:text-[40px] text-[34px] text-[#252b43] text-center font-montserrat font-extrabold leading-[57px]">{t('title')}</h2>
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[125px] gap-[70px]   md:mt-[60px] mt-5 mb-6">
                    <ServiceCard image="/tech.svg" title={t('services.0.title')} description={t('services.0.description')}/>
                    <ServiceCard image="/tech.svg" title={t('services.1.title')} description={t('services.1.description')}/>
                    <ServiceCard image="/car.svg" title={t('services.2.title')} description={t('services.2.description')}/>
                    <ServiceCard image="/radar.svg" title={t('services.3.title')} description={t('services.3.description')}/>
                </div>
            </div>
        </div>
            <div className="bg-[url('/bg_map.png')] bg-contain bg-end bg-no-repeat h-full lg:pb-[200px] md:pb-[100px] pb-[120px]">
                <div className="flex flex-col justify-center items-center xl:pt-[700px] lg:pt-[240px] md:pt-[240px] pt-[100px]">
                    <PostCard onOpenModal={onOpenModal} image="/truck_card.svg" title={t('posts.0.title')} description={t('posts.0.description')} btn={t('btn')}/>
                    <PostCard onOpenModal={onOpenModal}  image="/laptop.svg" title={t('posts.1.title')} description={t('posts.0.description')} btn={t('btn')}/>
                    <PostCard onOpenModal={onOpenModal}  image="/sky.svg" title={t('posts.2.title')} description={t('posts.0.description')} btn={t('btn')}/>
                </div>
            </div>
            
    </div>
   
  );
}
