import { getHomePageServices } from "@/lib/api/getHomePageServices";
import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Service from "./Service";
import Image from "next/image";

const Services = async () => {
  const data = await getHomePageServices();

  const services = data.homePage?.data?.attributes!.services!.data!.map(
    (service) => service.attributes,
  );

  return (
    <section id="services" className="w-full mt-[200px]">
      <div className="container mx-auto relative">
        <Image
          className="absolute -right-[38px] top-0 -translate-y-1/2 w-[76px] h-[106px] z-0"
          src={"/little-star.svg"}
          alt="star"
          width={200}
          height={200}
        />
        <div className="text-center">
          <h2 className={cn(cormorant.className, "text-[100px] uppercase leading-[120%]")}>
            Услуги и стоимость
          </h2>
          <p className="text-[20px]">нажми на услугу, чтобы изучить её подробнее</p>
        </div>
        {services ? (
          <ul className="mt-[25px] w-full">
            {services.map((service) => (
              <Service key={service!.name} {...service!} />
            ))}
          </ul>
        ) : null}
        <div className="w-full relative h-[1px] bg-primary-dark">
          <Image
            className="absolute -left-[23px] top-0 -translate-y-1/2 w-[46px] h-[85px] z-0"
            src={"/little-star.svg"}
            alt="star"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
