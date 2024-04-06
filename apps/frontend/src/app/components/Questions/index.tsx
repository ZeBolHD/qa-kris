import { getHomePageQuestions } from "@/lib/api/getHomePageQuestions";
import { cormorant } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Question from "./Question";

const Questions = async () => {
  const data = await getHomePageQuestions();

  const questions =
    (data.homePage?.data?.attributes?.questions?.data.map((question) => question.attributes) as {
      name: string;
      answer: string;
    }[]) || [];

  return (
    <section
      id="questions"
      className="w-full mt-[200px] max-laptop:mt-[150px] max-tablet:mt-[100px]"
    >
      <div
        className="mx-auto
      max-w-[1160px] max-desktop:max-w-[1010px]
      max-laptop:max-w-[630px] max-tablet:max-w-[460px] max-mobile:max-w-[300px]"
      >
        <h2
          className={cn(
            cormorant.className,
            "text-center text-[100px] uppercase leading-[120%] max-desktop:text-[70px] max-laptop:text-[60px] max-tablet:text-[40px]",
          )}
        >
          Вопросы и ответы
        </h2>
        <ol
          className="mt-[50px] w-full text-[25px] max-desktop:mt-[50px] max-laptop:mt-[40px] max-tablet:mt-[15px]
        max-desktop:text-[20px] max-laptop:text-[18px] max-tablet:text-[15px]"
        >
          {questions.map((question, index) => (
            <Question key={question.name} index={index} {...question} />
          ))}
        </ol>

        <div className="w-full h-[1px] bg-primary-dark"></div>
      </div>
    </section>
  );
};

export default Questions;
