'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryList = ({allCategory}) => {

    const pathName = usePathname();

  return (
    <ul>
      {allCategory.map((category) => (
        <li className="p-1 mb-1 text-center" key={category.category_id}>
          <Link className={pathName===`/news/${category.category_id}`?"bg-blue-200 p-2 px-1 text-purple-500 font-bold block rounded-md":''} href={`/news/${category.category_id}`}>
            {category.category_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
