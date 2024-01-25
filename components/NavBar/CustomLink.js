'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CustomLink = ({ href }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`hover:text-yellow-400 ${
        pathname === href ? 'text-yellow-400 border-b-2 border-yellow-400' : ''
      }
                `}
    >
      {href.split('/')[1]}
    </Link>
  );
};

export default CustomLink;
