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
    <section className="mt-[200px] w-full">
      <div className="container mx-auto">
        <h2
          className={cn(cormorant.className, "text-center uppercase text-[100px] leading-[120%]")}
        >
          Вопросы и ответы
        </h2>
        <ol className="mt-[50px] w-full text-[25px]">
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
