import { getNewsByNewId } from "@/lib/datas";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";


export async function generateMetadata({ params}) {
  const {newsId} = await params
 
  // fetch post information
  const data = await getNewsByNewId(newsId);
    const news = data[0];
    console.log(news);
 
  return {
    title: news.title,
    description: news.details,
  }
}

const NewsDetailsPage = async({params}) => {
    const {newsId} = await params;
    console.log(newsId);

    const data = await getNewsByNewId(newsId);
    const news = data[0];
    console.log(news);
    return (
        <div className="card-body p-2 shadow rounded-md mb-3 space-y-1 container mx-auto">
        <div className="flex items-center justify-between bg-slate-200 p-1 rounded-md">
          <div className="flex items-center gap-1">
            <Image
              className="rounded-full"
              src={news.author.img}
              alt={news.title}
              height={40}
              width={40}
            ></Image>
            <div className="">
              <h4>{news.author.name}</h4>
              <small>{news.author.published_date}</small>
            </div>

            
          </div>
          <div className="flex items-center gap-1">
              <span>
                <CiBookmark />
              </span>
              <span>
                <FaShareAlt />
              </span>
            </div>
        </div>
        <h2 className="text-2xl font-bold">{news.title}</h2>
        <Image
          src={news.image_url}
          alt={news.title}
          height={300}
          width={400}
        ></Image>

        <p className="">{news.details}</p>

        {/* <Link href={`/detailsnews/${news._id}`}><Button  variant="danger-soft">Read More...</Button>
        <hr className="my-2" /></Link> */}

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <FaStar className="text-amber-500" />
            {news.rating.number}
          </span>
          <span className="flex items-center gap-1">
            <FaEye />
            {news.total_view}
          </span>
        </div>

        <Link href={`/news/${news.category_id}`}><Button>Back to this category news</Button></Link>
      </div>
    );
};

export default NewsDetailsPage;