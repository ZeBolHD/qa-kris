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
    <ul className="flex flex-col text-[20px] w-[250px]">
      {items.map((item) => (
        <li
          className={cn(
            "py-[25px] relative flex items-center",
            reversed
              ? "ml-auto mr-0 text-right before:content-[''] before:w-[260px] before:absolute before:top-0 before:right-0 before:h-[1px] before:bg-primary-dark"
              : "after:content-[''] after:w-[260px] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-primary-dark",
          )}
          key={item}
        >
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
