'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLinks = ({href, children}) => {

    const pathName = usePathname();
    return (
        <Link className={pathName===href? 'text-purple-500':''} href={href}>{children}</Link>
    );
};

export default NavLinks;