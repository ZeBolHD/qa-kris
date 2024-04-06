import { getHomePageRequisitesNumber } from "@/lib/api/getHomePageRequisites";

const Requisites = async () => {
  const data = await getHomePageRequisitesNumber();

  const requisites_number = data.homePage?.data?.attributes?.requisites_number as string;

  return (
    <div>
      <p>ИП Петрова К. Р.</p>
      <p className="mt-[15px]">ИНН {requisites_number}</p>
    </div>
  );
};

export default Requisites;
