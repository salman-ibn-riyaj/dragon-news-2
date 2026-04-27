import AllCategory from "@/components/AllCategory";
import LogInWith from "@/components/LogInWith";
import NewsCard from "@/components/NewsCard";

const DynamicNewsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "id paici");

  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  const data = await res.json();
  const newsLists = data.data;
  console.log(newsLists);

  return (
    <div className="container mx-auto my-12 grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <AllCategory></AllCategory>
      </div>
      
      <div className="col-span-6">
        {newsLists.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
      <div className="col-span-3">
        <LogInWith></LogInWith>
      </div>
    </div>
  );
};

export default DynamicNewsPage;
