import { getDataBycategory } from "@/lib/datas";
import Link from "next/link";
import CategoryList from "./CategoryList";

const AllCategory = async () => {
  const categories = await getDataBycategory();
  const allCategory = categories.news_category;
  console.log(allCategory);
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">All The Category</h2>

      <CategoryList allCategory={allCategory}></CategoryList>
    </div>
  );
};

export default AllCategory;
