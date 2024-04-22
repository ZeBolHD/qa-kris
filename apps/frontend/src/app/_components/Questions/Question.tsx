"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

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

  return (
    <li
      key={name}
      className="w-full flex py-[25px] relative before:content-[''] before:w-full before:absolute before:h-[1px] before:top-0 
      before:left-0 before:bg-primary-dark max-mobile:py-[23px]"
    >
      <dl className="w-full">
        <div className="w-full flex items-center justify-between">
          <dt className="flex items-center">
            <span>{index + 1}.</span>
            <h3 className="ml-[10px]">{name}</h3>
          </dt>

          <button
            className="min-w-[50px] min-h-[50px] relative border-[1px] border-primary-dark rounded-full
            max-desktop:min-w-[35px] max-desktop:min-h-[35px]"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              )}
            </span>
          </button>
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
              <p>{answer}</p>
            </dd>
          </div>
        </div>
      </dl>
    </li>
  );
};

export default Question;