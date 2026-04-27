import Image from "next/image";
import NavLinks from "./NavLinks";
import DemoUser from '../assets/profile.png'
import { Button } from "@heroui/react";


const Navbar = () => {
    return (
        
        <div className="flex justify-between gap-4 items-center container mx-auto my-4">
            <div>

            </div>

            <ul className="flex gap-3 items-center">
                <li><NavLinks href={'/'}>Home</NavLinks></li>
                <li><NavLinks href={'/about'}>About</NavLinks></li>
                <li><NavLinks href={'/career'}>Career</NavLinks></li>
            </ul>

            <div className="flex items-center gap-2">
                <Image className='mx-auto' src={DemoUser} alt='header log' height={40} width={40}></Image>
                <Button>Login</Button>
            </div>
        </div>
    );
};

export default Navbar;