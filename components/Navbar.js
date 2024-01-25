'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='lg:px-20 px-3 py-6 uppercase bg-slate-800'>
      <ul className='flex justify-between'>
        <li className='text-yellow-400 font-bold'>
          <Link href='/'>Abdullah Hosen Akash</Link>
        </li>
        <li>
          <ul className='flex gap-8 text-slate-400'>
            <li>
              <Link
                href='/about'
                className={`hover:text-yellow-400 ${
                  pathname === '/about'
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : ''
                }
                `}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href='/skills'
                className={`hover:text-yellow-400 ${
                  pathname === '/skills'
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : ''
                }
                  `}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href='/projects'
                className={`hover:text-yellow-400 ${
                  pathname === '/projects'
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : ''
                }
                  `}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={`hover:text-yellow-400 ${
                  pathname === '/contact'
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : ''
                }
                  `}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href='/resume'
                className={`hover:text-yellow-400 ${
                  pathname === '/resume'
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : ''
                }
                  `}
              >
                Resume
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
