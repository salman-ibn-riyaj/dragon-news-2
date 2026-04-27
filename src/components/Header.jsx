import Image from 'next/image';
import loghHeader from '../assets/logo.png'
import { compareAsc, format } from "date-fns";


const Header = () => {
    return (
        <div className='text-center my-5 space-y-2'>
            <Image className='mx-auto' src={loghHeader} alt='header log' height={200} width={400}></Image>

            <p className='text-gray-500'>Journalism Without Fear or Favour</p>

            <span className='text-gray-500'>{format(new Date(), "EEEE MMM dd yyyy")}</span>


        </div>
    );
};

export default Header;