import { Button } from "@heroui/react";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div>
      <div className="card-body p-2 shadow rounded-md mb-3 space-y-1">
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

        <p className="line-clamp-3">{news.details}</p>
        <Button variant="danger-soft">Read More...</Button>
        <hr className="my-2" />

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
      </div>
    </div>
  );
};

export default NewsCard;
