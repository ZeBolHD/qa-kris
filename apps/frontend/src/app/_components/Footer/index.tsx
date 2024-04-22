import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Requisites from "./Requisites";

const Footer = () => {
  return (
    <footer className="w-full mt-[200px] max-laptop:mt-[150px] max-tablet:mt-[100px]">
      <div className="w-[95%] mx-auto bg-primary-dark rounded-t-[15px] max-desktop:w-[98%]">
        <div
          className="mx-auto py-[50px] flex flex-col text-primary-bg text-[20px] max-w-[1160px] max-desktop:max-w-[1010px]
      max-laptop:max-w-[630px] max-tablet:max-w-[460px] max-mobile:max-w-[300px]
      max-laptop:py-[40px] max-tablet:py-[30px] gap-[50px] max-laptop:gap-[40px] max-tablet:gap-[30px]
      max-desktop:text-[17px] max-laptop:text-[15px] max-tablet:text-[12px]"
        >
          <h2
            className={cn(
              cormorant.className,
              "text-[100px] uppercase text-center leading-[120%] max-desktop:text-[70px] max-laptop:text-[60px] max-tablet:text-[40px]",
            )}
          >
            Жду вас у себя на менторстве
          </h2>

          <div className="w-full flex justify-between items-center">
            <ul className="flex flex-col gap-[25px] max-laptop:gap-[20px] max-tablet:gap-[10px] max-mobile:gap-[15px]">
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
            <span className="text-[100px] max-desktop:text-[70px] max-laptop:text-[60px] max-tablet:text-[40px]">
              💸
            </span>
          </div>

          <div className="w-full h-[2px] bg-primary-bg"></div>

          <div className="w-full flex justify-between max-mobile:gap-[15px]">
            <Requisites />
            <div className="text-right">
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
