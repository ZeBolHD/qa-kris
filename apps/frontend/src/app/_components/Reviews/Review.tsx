import { useRef } from "react";
import { cn } from "@/lib/utils";
import Modal from "../Modal";
import { useTruncatedElement } from "@/hooks/useTruncatedElement";

const Review = ({ text, author }: { text: string; author: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const { isTruncated, isReadingMore, setIsReadingMore } = useTruncatedElement({ ref });

  const toggleModal = () => setIsReadingMore((prev) => !prev);

  return (
    <div className={cn("flex flex-col gap-[10px] text-left w-full")}>
      <h4 className="font-bold">{author}</h4>
      <p ref={ref} className="line-clamp-[12] whitespace-pre-line">
        {text}
      </p>
      {isTruncated && !isReadingMore && (
        <span className="text-primary-light cursor-pointer" onClick={toggleModal}>
          подробнее
        </span>
      )}

      {isReadingMore && (
        <Modal onClose={toggleModal} isOpen={isReadingMore}>
          <div>
            <h4 className="font-bold">{author}</h4>
            <p className="mt-[25px] whitespace-pre-line">{text}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Review;
