import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";

const breakingNews = [
    {
        id:1,
        title: 'Hi my name is Salman Shah'
    },
    {
        id:2,
        title: 'Hi my name is Salman Shah'
    },
    {
        id:3,
        title: 'Hi my name is Salman Shah'
    },
    {
        id:4,
        title: 'Hi my name is Salman Shah'
    },
    {
        id:5,
        title: 'Hi my name is Salman Shah'
    },
]
const BreakingNews = () => {
    return (
        <div className="flex gap-2 container mx-auto bg-slate-100 p-2">
            <Button variant="danger">Latest</Button>

            <Marquee pauseOnHover speed={80}>
               {
                breakingNews.map(news => <p className="mr-4" key={news.id} news={news}>{news.title}</p>)
               }
            </Marquee>

        </div>
    );
};

export default BreakingNews;