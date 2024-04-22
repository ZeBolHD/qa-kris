"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Review from "./Review";

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
      className="text-[20px] max-desktop:text-[17px] max-laptop:text-[15px] max-tablet:text-[12px]"
      showThumbs={false}
      showArrows
      swipeable={true}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            className="absolute w-[30px] h-[54px] z-50 top-1/2 left-0 transform -translate-y-1/2  max-desktop:w-[26px] max-desktop:h-[54px]
            max-laptop:w-[16px] max-laptop:h-[36px] max-tablet:w-[12px] max-tablet:h-[16px]"
            onClick={onClickHandler}
            title={label}
          >
            <Image
              src={"/arrow.svg"}
              width={30}
              height={55}
              className="w-[30px] h-[55px]"
              alt="arrow"
            />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute w-[30px] h-[54px] z-50 top-1/2 right-0 transform rotate-180 -translate-y-1/2 max-desktop:w-[26px] max-desktop:h-[54px]
             max-laptop:w-[16px] max-laptop:h-[36px] max-tablet:w-[12px] max-tablet:h-[16px]"
          >
            <Image
              src={"/arrow.svg"}
              width={30}
              height={55}
              className="w-[30px] h-[55px]"
              alt="arrow"
            />
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              className="w-[17px] h-[17px] mx-[5px] rounded-full bg-primary-dark inline-block max-desktop:w-[13px] max-desktop:h-[13px]
              max-desktop:mx-[3px] max-laptop:h-[10px] max-laptop:w-[10px] max-tablet:w-[7px] max-tablet:h-[7px]"
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            className="w-[17px] h-[17px] mx-[5px] rounded-full bg-primary-light  cursor-pointer inline-block max-desktop:w-[13px] max-desktop:h-[13px]
            max-desktop:mx-[3px] max-laptop:h-[10px] max-laptop:w-[10px] max-tablet:w-[7px] max-tablet:h-[7px]"
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
        <div
          key={index}
          className="grid grid-cols-2 gap-[35px] min-w-full px-[50px] mb-[75px]
        max-desktop:gap-[25px] max-laptop:gap-[20px] max-tablet:gap-[10px] max-laptop:px-[40px] max-tablet:px-[20px] max-mobile:px-[10px]"
        >
          {reviews.map((review) => (
            <Review {...review} key={review.author} />
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewsCarousel;
