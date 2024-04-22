import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full">
      <div
        className="py-[35px] flex mx-auto justify-between items-center max-w-[1160px] max-desktop:max-w-[1010px]
        max-laptop:max-w-[630px] max-tablet:max-w-[460px] max-mobile:max-w-[300px] max-laptop:py-[24px] max-tablet:py-[17px]
        max-tablet:justify-between"
      >
        <Link href="/" className="h-fit">
          <h2
            className={cn(
              cormorant.className,
              "text-[40px] uppercase font-medium leading-[120%] max-desktop:text-[35px] max-laptop:max-text-[25px] max-tablet:text-[20px] max-tablet:w-[100px]",
            )}
          >
            Кристина Петрова
          </h2>
        </Link>
        <Link href="#application">
          <button
            className="px-[25px] py-[10px] text-center text-[25px] font-normal leading-[120%] uppercase border-l-[2px] 
            border-r-[2px] border-primary-dark rounded-[10px] max-desktop:text-[20px] max-laptop:text-[18px] max-tablet:text-[15px]
            max-tablet:px-[15px] max-tablet:py-[5px]"
          >
            Оставить заявку
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
