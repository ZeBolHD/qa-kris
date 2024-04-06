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
    <section
      id="services"
      className="w-full mt-[200px] max-laptop:mt-[150px] max-tablet:mt-[100px]"
    >
      <div
        className="mx-auto relative 
        max-w-[1160px] max-desktop:max-w-[1010px]
        max-laptop:max-w-[630px] max-tablet:max-w-[460px] max-mobile:max-w-[300px]"
      >
        <Image
          className="absolute right-0 top-0 -translate-x-1/2 -translate-y-1/2 w-[76px] h-[106px] z-0 max-desktop:w-[65px] max-desktop:h-[90px]
          max-laptop:w-[40px] max-laptop:h-[56px]"
          src={"/little-star.svg"}
          alt="star"
          width={200}
          height={200}
        />
        <div className="text-center">
          <h2
            className={cn(
              cormorant.className,
              "text-[100px] uppercase leading-[120%] max-desktop:text-[70px] max-laptop:text-[60px] max-tablet:text-[40px]",
            )}
          >
            Услуги и стоимость
          </h2>
          <p className="text-[20px] max-desktop:text-[17px] max-laptop:text-[15px] max-tablet:text-[12px]">
            нажми на услугу, чтобы изучить её подробнее
          </p>
        </div>
        {services ? (
          <ul className="mt-[35px] w-full">
            {services.map((service) => (
              <Service key={service!.name} {...service!} />
            ))}
          </ul>
        ) : null}
        <div className="w-full relative h-[1px] bg-primary-dark">
          <Image
            className="absolute left-0 -translate-x-1/2 top-0 -translate-y-1/2 w-[46px] h-[85px] z-0 max-desktop:w-[26px] max-desktop:h-[50px]"
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
