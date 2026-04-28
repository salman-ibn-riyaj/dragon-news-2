'use client'
import Image from "next/image";
import NavLinks from "./NavLinks";
import DemoUser from '../assets/profile.png'
import { Button } from "@heroui/react";
import Link from "next/link";
import { authClient, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";



const Navbar = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user);

    const handleSignOut = async () => {
    await authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
                router.push('/login');
            }
        }
    });
};

    return (

        <div className="flex justify-between gap-4 items-center container mx-auto my-4">
            <div>

            </div>

            <ul className="flex gap-3 items-center">
                <li><NavLinks href={'/'}>Home</NavLinks></li>
                <li><NavLinks href={'/about'}>About</NavLinks></li>
                <li><NavLinks href={'/career'}>Career</NavLinks></li>
            </ul>

            {user? <><p>Welcome! {user.name}</p><Image className='rounded-full' src={user.image} alt='user log' height={40} width={40}></Image><Button onClick={handleSignOut} variant="danger">Sign Out</Button></>:<Link href={'/login'} className="flex items-center gap-2">
                <Image className='mx-auto' src={DemoUser} alt='header log' height={40} width={40}></Image>
                <Button>Login</Button>
            </Link>}

            
        </div>
    );
};

export default Navbar;