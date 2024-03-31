import { getHomePageRequisitesNumber } from "@/lib/api/getHomePageRequisites";
import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Footer = async () => {
  const data = await getHomePageRequisitesNumber();

  const requisites_number = data.homePage?.data?.attributes?.requisites_number as string;

  return (
    <footer className="w-full mt-[100px]">
      <div className="w-[95%] mx-auto bg-primary-dark rounded-t-[15px] text-[20px]">
        <div className="container mx-auto py-[70px] text-primary-bg">
          <h2
            className={cn(cormorant.className, "text-[100px] uppercase text-center leading-[120%]")}
          >
            Your future mentor Kristina Petrova
          </h2>

          <div className="w-full mt-[50px] flex justify-between items-center">
            <ul className="flex flex-col gap-[25px]">
              <li>
                <Link href="#program-and-tools">Программа & Инструменты</Link>
              </li>
              <li>
                <Link href="#services">Услуги и стоимость</Link>
              </li>
              <li>
                <Link href="#reviews">Отзывы</Link>
              </li>
            </ul>
            <span className="text-[100px]">💸</span>
          </div>

          <div className="w-full mt-[40px] h-[2px] bg-primary-bg"></div>

          <div className="w-full mt-[40px] flex justify-between">
            <div>
              <p>ИП Петрова К. Р.</p>
              <p className="mt-[15px]">ИНН {requisites_number}</p>
            </div>
            <div>
              <p>© 2024, Все права защищены,</p>
              <p className="mt-[15px]">
                <Link href="/privacy">Политика кофиденциальности</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
