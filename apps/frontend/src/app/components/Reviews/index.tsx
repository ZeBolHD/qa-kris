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

  console.log(reviews);

  return (
    <section id="reviews" className="w-full mt-[200px]">
      <div className="container mx-auto">
        <h2 className={cn(cormorant.className, "text-[100px] text-center uppercase")}>Отзывы</h2>

        <div className="mt-[50px] text-[20px] min-w-full">
          <ReviewsCarousel reviews={reviews} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
