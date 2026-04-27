import { Button } from "@heroui/react";
import Link from "next/link";


const AboutPage = () => {
    return (
        <div>
            <h2>Hi! I am Salman Shah</h2>
            <Button><Link href={'https://salmanshah.vercel.app/'}>Here is My Portfolio:</Link></Button>
            
        </div>
    );
};

export default AboutPage;