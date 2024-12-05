import Image from "next/image";
import { Header } from "../../header/Header";
import ServiceCard from "@/components/serviceCard/ServiceCard";
import PostCard from "@/components/postCard/PostCard";

export default function ServicesSection() {
  return (
    <div className="bg-[#f3fffd] h-full">
        <div className="bg-[#f3fffd] h-[1133px] relative px-[230px]">
            <h2 className="p-6 text-[40px] text-[#252b43] text-center font-montserrat font-extrabold leading-[57px]">Услуги компании</h2>
            <div className="flex justify-center items-center gap-[125px] flex-wrap mt-[60px]">
                <ServiceCard image="/tech.svg" title="Спецтехника" description="Техника специального назначения"/>
                <ServiceCard image="/tech.svg" title="Станки" description="• Оперативное закрытие срочных перевозок  <br />• Три вида аукционов: на понижение, первого согласия, без стартовой цены"/>
                <ServiceCard image="/car.svg" title="Автомобили" description="•	Фиксация и учет договорных условий  <br />• Автоматизация логистических процессов  <br />• Возможность настройки под конкретные задачи"/>
                <ServiceCard image="/radar.svg" title="и другое..." description="Все виды отслеживания: <br />• Бортовые блоки  <br />• GSM-связь  <br />• Мобильное приложение"/>
            </div>
        </div>
            <div className="bg-[url('/bg_map.png')] bg-contain bg-end bg-no-repeat h-full pb-[200px]">
                <div className="flex flex-col justify-center items-center pt-[700px] ">
                    <PostCard image="/truck_card.svg" title="Транспортные тендеры" description="Обеспечим контроль и исполнение бюджета в ТМС <br />  
                                                                                            Сильнейший аналитический модуль  <br />
                                                                                            Единый сквозной процесс «Закупки-исполнение» <br />
                                                                                            Независимость принятых решений <br />
                                                                                            Работа только с проверенными перевозчиками <br />
                                                                                            "/>
                    <PostCard image="/laptop.svg" title="ТMS / Система управления перевозками" description="Контроль всех этапов от закупки до оплаты <br />
                                                                                            Бесшовная интеграция продуктов в экосистеме ТМС <br />
                                                                                            Отслеживание статуса заказа онлайн <br />
                                                                                            Контроль документооборота <br />
                                                                                            Оперативная обработка отклонений <br />
                                                                                            "/>
                    <PostCard image="/sky.svg" title="Трекинг грузов" description="Интеграция с ERP-системой клиентов <br />
                                                                                        Автоматизация распределения заказов <br />
                                                                                        Отслеживание изменения статусов <br />
                                                                                        Возможность гибкой настройки  <br />
                                                                                        Аудит логистических процессов <br />
                                                                                            "/>
                </div>
            </div>
            
    </div>
   
  );
}
