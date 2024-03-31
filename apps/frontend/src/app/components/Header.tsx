import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full">
      <div className="container py-6 flex mx-auto justify-between items-center">
        <Link href="/" className="h-fit">
          <h2 className={cn(cormorant.className, "text-[40px] font-medium leading-[120%]")}>Кристина Петрова</h2>
        </Link>
        <Link href="/application">
          <button
            className="px-[25px] py-[10px] text-center text-[25px] font-normal leading-[120%] uppercase border-l-[2px] 
            border-r-[2px] border-primary-dark rounded-[10px]"
          >
            Оставить заявку
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
