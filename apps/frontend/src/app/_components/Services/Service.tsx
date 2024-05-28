"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

import styles from "@/styles/markdown.module.scss";
import ToggleListItem from "../ToggleListItem";

interface ServiceProps {
  name?: string;
  price?: string;
  time?: string | null | undefined;
  description?: string;
}

const Service = ({ name, price, time, description }: ServiceProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const descriptionRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (descriptionRef.current) {
      setContentHeight(descriptionRef.current.clientHeight);
    }
  }, [isOpen]);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const priceAndTime = "/ " + price + " /" + (time ? " " + time + " /" : "");

  return (
    <li
      className="py-[30px] w-full relative text-[25px] cursor-pointer 
      before:content-[''] before:w-full before:absolute before:h-[1px] before:top-0 before:right-0 before:bg-primary-dark
      max-desktop:py-[25px] max-laptop:py-[15px] max-desktop:text-[20px] max-laptop:text-[18px] max-tablet:text-[15px]"
      onClick={handleOpen}
    >
      <div className="flex w-full">
        <div className="mr-5 max-tablet:hidden">
          <ToggleListItem isToggled={isOpen} />
        </div>
        <div className="flex w-full justify-between items-center max-tablet:flex-col max-tablet:items-stretch">
          <div className="max-tablet:flex max-tablet:gap-3 max-tablet:items-center max-tablet:flex-row-reverse max-tablet:ml-0 max-tablet:mr-auto">
            <h3>{name}</h3>
            <div className="hidden max-tablet:block">
              <ToggleListItem isToggled={isOpen} />
            </div>
          </div>
          <div className="max-w-[500px] flex font-bold text-right max-tablet:mt-[10px] max-tablet:mr-0 max-tablet:ml-auto">
            <p>{priceAndTime}</p>
          </div>
        </div>
      </div>
      <div
        style={{ maxHeight: isOpen ? contentHeight : 0 }}
        className={cn(
          isOpen ? `mt-[25px] max-laptop:mt-[15px]` : "",
          "text-[20px] transition-all duration-300 overflow-hidden w-full",
        )}
      >
        <div
          ref={descriptionRef}
          className="w-full h-full max-desktop:text-[20px] max-laptop:text-[18px] max-tablet:text-[12px]"
        >
          <Markdown className={styles.markdown}>{description}</Markdown>
        </div>
      </div>
    </li>
  );
};

export default Service;
