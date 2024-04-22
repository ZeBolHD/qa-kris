import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const portal = document.getElementById("modal");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      onClick={handleClose}
      className="fixed inset-0 flex items-center z-[999] justify-center bg-black bg-opacity-50"
    >
      <div
        className="relative p-[50px] w-[550px] box-content min-h-[480px] bg-primary-bg rounded-[20px] text-[20px]
        max-desktop:text-[17px] max-laptop:text-[15px] max-tablet:text-[12px] max-laptop:w-[400px] max-tablet:w-[300px] max-mobile:w-[80%]
        max-laptop:p-[15px]"
      >
        <Image
          src="/close.svg"
          alt="close"
          width={25}
          height={25}
          className="absolute h-[25px] w-[25px] top-[50px] right-[50px] cursor-pointer max-laptop:top-[15px] max-laptop:right-[15px]"
          onClick={handleClose}
        />
        {children}
      </div>
    </div>,
    portal!,
  );
};

export default Modal;
