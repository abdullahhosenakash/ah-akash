'use client';

import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CustomLink from './CustomLink';

const ToggleBarIcon = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <>
      {toggle ? (
        <button onClick={() => setToggle(false)}>
          <FontAwesomeIcon icon={faX} className='text-xl' />
        </button>
      ) : (
        <button onClick={() => setToggle(true)}>
          <FontAwesomeIcon icon={faBars} className='text-xl' />
        </button>
      )}
      {toggle && (
        <ul className='flex flex-col gap-2 absolute w-full left-0 pl-3 pt-3 bg-slate-800 text-slate-400 text-lg'>
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
      )}
    </>
  );
};

export default ToggleBarIcon;
