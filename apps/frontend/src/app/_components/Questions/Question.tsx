"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import ToggleListItem from "../ToggleListItem";
import Markdown from "react-markdown";

interface QuestionProps {
  index: number;
  name: string;
  answer: string;
}

const Question = ({ index, name, answer }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const answerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) {
      setContentHeight(answerRef.current.clientHeight);
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li
      key={name}
      className="w-full flex py-[25px] relative before:content-[''] before:w-full before:absolute before:h-[1px] before:top-0 
      before:left-0 before:bg-primary-dark max-mobile:py-[23px] cursor-pointer"
      onClick={handleOpen}
    >
      <dl className="w-full">
        <div className="w-full flex items-center justify-between">
          <dt className="flex items-center">
            <span>{index + 1}.</span>
            <h3 className="ml-[10px]">{name}</h3>
          </dt>

          <ToggleListItem isToggled={isOpen} />
        </div>
        <div
          style={{ maxHeight: isOpen ? contentHeight : 0 }}
          className={cn(
            isOpen ? `mt-[25px]` : "",
            "transition-all duration-300 overflow-hidden w-full",
          )}
        >
          <div ref={answerRef}>
            <dd>
              <Markdown>{answer}</Markdown>
            </dd>
          </div>
        </div>
      </dl>
    </li>
  );
};

export default Question;
