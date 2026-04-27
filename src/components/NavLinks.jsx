import Link from "next/link";


const NavLinks = ({href, children}) => {
    return (
        <Link href={href}>{children}</Link>
    );
};

export default NavLinks;