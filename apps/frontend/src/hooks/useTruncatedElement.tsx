"use client";

import { useLayoutEffect, useState } from "react";

export const useTruncatedElement = ({ ref }: { ref: React.RefObject<HTMLElement> }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isReadingMore, setIsReadingMore] = useState(false);

  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current || {};

    if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  }, [ref]);

  return {
    isTruncated,
    isReadingMore,
    setIsReadingMore,
  };
};
