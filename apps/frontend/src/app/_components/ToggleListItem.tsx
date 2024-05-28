import Image from "next/image";

interface ToggleListItemProps {
  isToggled: boolean;
  toggle?: () => void;
}

const ToggleListItem = ({ toggle, isToggled }: ToggleListItemProps) => {
  return (
    <button
      className="min-w-[50px] min-h-[50px] h-[50px] w-[50px] relative border-[1px] border-primary-dark rounded-full
  max-desktop:min-w-[35px] max-desktop:w-[35px] max-desktop:h-[35px] max-desktop:min-h-[35px]"
      type="button"
      onClick={toggle}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        {isToggled ? (
          <Image
            src={"/item-close.svg"}
            className="min-w-[20px]"
            width={30}
            height={30}
            alt={"close"}
          />
        ) : (
          <Image
            src={"/item-open.svg"}
            className="min-w-[20px]"
            width={30}
            height={30}
            alt={"open"}
          />
        )}
      </span>
    </button>
  );
};

export default ToggleListItem;
