import { getHomePageReviews } from "@/lib/api/getHomePageReviews";
import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import ReviewsCarousel from "./ReviewsCaroucel";

const Reviews = async () => {
  const data = await getHomePageReviews();

  const reviews =
    (data.homePage?.data?.attributes?.reviews?.data.map((review) => review.attributes) as {
      author: string;
      text: string;
    }[]) || [];

  return (
    <section id="reviews" className="w-full mt-[200px] max-laptop:mt-[150px] max-tablet:mt-[100px]">
      <div
        className="mx-auto max-w-[1160px] max-desktop:max-w-[1010px]
        max-laptop:max-w-[630px] max-tablet:max-w-[460px] max-mobile:max-w-[300px]"
      >
        <h2
          className={cn(
            cormorant.className,
            "text-[100px] text-center uppercase max-desktop:text-[70px] max-laptop:text-[60px] max-tablet:text-[40px]",
          )}
        >
          Отзывы
        </h2>

        <div className="mt-[50px] text-[20px] min-w-full max-desktop:mt-[30px] max-laptop:mt-[40px] max-tablet:mt-[30px]">
          <ReviewsCarousel reviews={reviews} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
