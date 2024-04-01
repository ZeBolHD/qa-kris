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
      className="w-full flex py-[30px] relative before:content-[''] before:w-full before:absolute before:h-[1px] before:top-0 
      before:left-0 before:bg-primary-dark"
    >
      <dl className="w-full">
        <div className="w-full flex items-center justify-between">
          <dt className="flex items-center">
            <span>{index + 1}.</span>
            <h3 className="ml-[10px]">{name}</h3>
          </dt>

          <button
            className="w-[60px] h-[60px] relative border-[1px] border-primary-dark rounded-full"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="text-[44px] absolute top-[29px] left-[29px] -translate-x-1/2 -translate-y-1/2">
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
            "text-[25px] transition-all duration-300 overflow-hidden w-full",
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
