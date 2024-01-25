import Link from 'next/link';
import CustomLink from '@/components/NavBar/CustomLink';
import DropDownNavItems from '@/components/NavBar/DropDownNavItems';

const Navbar = () => {
  return (
    <nav className='lg:px-20 px-4 py-6 uppercase bg-gray-800'>
      <ul className='flex justify-between items-center'>
        <li>
          <Link
            href='/'
            className='text-yellow-400 font-bold lg:text-2xl text-xl'
          >
            Abdullah Hosen Akash
          </Link>
        </li>
        <li>
          <div className='lg:hidden'>
            <DropDownNavItems />
          </div>
          <ul className='hidden lg:flex gap-8 text-slate-400 text-lg'>
            <li>
              <CustomLink href='/about' />
            </li>
            <li>
              <CustomLink href='/skills' />
            </li>
            <li>
              <CustomLink href='/projects' />
            </li>
            <li>
              <CustomLink href='/contact' />
            </li>
            <li>
              <CustomLink href='/resume' />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
