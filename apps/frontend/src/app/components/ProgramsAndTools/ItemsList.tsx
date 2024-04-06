import { cn } from "@/lib/utils";

interface ItemsListProps {
  items?: string[];
  reversed?: boolean;
}

const ItemsList = ({ items, reversed }: ItemsListProps) => {
  if (!items) {
    return null;
  }

  return (
    <ul
      className={cn(
        "flex flex-col text-[20px] w-[260px] max-desktop:text-[17px] max-laptop:text-[15px] max-tablet:text-[12px] max-laptop:w-[200px] max-tablet:w-full",
        reversed ? "mt-auto mb-0" : "",
      )}
    >
      {items.map((item) => (
        <li
          className={cn(
            "py-[20px] relative flex items-center max-laptop:py-[15px] max-tablet:flex max-tablet:justify-center",
            reversed
              ? "ml-auto mr-0 text-right before:content-[''] before:w-[260px] before:absolute before:top-0 before:right-0 before:h-[1px] before:bg-primary-dark" +
                  " max-laptop:before:w-[140px] max-tablet:before:w-full max-tablet:text-center max-tablet:ml-0"
              : "after:content-[''] after:w-[260px] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-primary-dark" +
                  " max-laptop:after:w-[140px] max-tablet:after:w-full",
          )}
          key={item}
        >
          <p className="">{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
