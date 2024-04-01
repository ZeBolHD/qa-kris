"use client";

import Image from "next/image";
import Markdown from "react-markdown";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ReviewsCarouselProps {
  reviews: {
    text: string;
    author: string;
  }[];
}

function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  );
}

const ReviewsCarousel = ({ reviews }: ReviewsCarouselProps) => {
  if (!reviews.length) return null;

  const reviewChunks = chunk(reviews, 2);

  return (
    <Carousel
      showThumbs={false}
      showArrows
      swipeable={true}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            className="absolute z-50 top-1/2 left-0 transform -translate-y-1/2"
            onClick={() => {
              onClickHandler();
              console.log("clicked");
            }}
            title={label}
          >
            <Image src={"/arrow.svg"} width={30} height={55} alt="arrow" />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute z-50 top-1/2 right-0 transform rotate-180 -translate-y-1/2"
          >
            <Image src={"/arrow.svg"} width={30} height={55} alt="arrow" />
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              className="w-[17px] h-[17px] mx-[5px] rounded-full bg-primary-dark inline-block"
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            className="w-[17px] h-[17px] mx-[5px] rounded-full bg-primary-light  cursor-pointer inline-block"
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {reviewChunks.map((reviews, index) => (
        <div key={index} className="grid grid-cols-2 gap-[30px] min-w-full px-[40px] mb-[75px]">
          {reviews.map((review) => (
            <div key={review.author} className="flex flex-col gap-4 text-left">
              <Markdown className="">{review.text}</Markdown>
              <p className="font-bold">Автор: {review.author}</p>
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewsCarousel;
