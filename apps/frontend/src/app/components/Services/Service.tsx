"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

import styles from "./markdown.module.scss";

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

  const handleClick = () => setIsOpen((prev) => !prev);

  const priceAndTime = "/ " + price + " /" + (time ? " " + time + " /" : "");

  return (
    <li
      className="py-[30px] w-full relative text-[25px] cursor-pointer 
      before:content-[''] before:w-full before:absolute before:h-[1px] before:top-0 before:right-0 before:bg-primary-dark"
      onClick={handleClick}
    >
      <div className="flex justify-between items-center">
        <h3>{name}</h3>
        <div className="max-w-[500px] flex font-bold text-right">
          <p>{priceAndTime}</p>
        </div>
      </div>
      <div
        style={{ maxHeight: isOpen ? contentHeight : 0 }}
        className={cn(
          isOpen ? `mt-[25px]` : "",
          "text-[20px] transition-all duration-300 overflow-hidden w-full",
        )}
      >
        <div ref={descriptionRef} className="w-full h-full">
          <Markdown className={styles.markdown}>{description}</Markdown>
        </div>
      </div>
    </li>
  );
};

export default Service;
