import { Button } from "@heroui/react";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "best news portal on my world",
};
const AboutPage = () => {
    return (
        <div className="my-10 container mx-auto text-center space-y-2">
            <h2>Hi! I am Salman Shah</h2>
            <Button><Link href={'https://salmanshah.vercel.app/'}>Click to see my Portfolio</Link></Button>
            
        </div>
    );
};

export default AboutPage;