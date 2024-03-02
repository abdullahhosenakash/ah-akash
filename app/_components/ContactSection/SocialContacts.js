import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
  faWhatsappSquare,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialContacts = () => {
  return (
    <div className='flex gap-4 items-center'>
      <Link href='https://www.facebook.com/abdullahhosen.akash' target='_blank'>
        <FontAwesomeIcon
          icon={faSquareFacebook}
          className='text-4xl bg-white text-blue-700 px-[2px] rounded-lg w-8'
        />
      </Link>

      <Link
        href='https://www.linkedin.com/in/md-abdullah-hosen'
        target='_blank'
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className='text-4xl bg-white text-blue-700 px-[2px] rounded-lg w-8'
        />
      </Link>

      <Link href='https://twitter.com/MdAbdullahHosen' target='_blank'>
        <FontAwesomeIcon
          icon={faXTwitter}
          className='text-4xl bg-white text-black px-[2px] rounded-lg w-8'
        />
      </Link>

      <Link href='https://github.com/abdullahhosenakash' target='_blank'>
        <FontAwesomeIcon
          icon={faSquareGithub}
          className='text-4xl bg-white text-black px-[2px] rounded-lg w-8'
        />
      </Link>

      <Link href='mailto:abdullahhosenakash@gmail.com' target='_blank'>
        <FontAwesomeIcon
          icon={faSquareEnvelope}
          className='text-4xl bg-white text-black px-[2px] rounded-lg w-8'
        />
      </Link>

      <Link href='https://wa.me/8801786756100' target='_blank'>
        <FontAwesomeIcon
          icon={faWhatsappSquare}
          className='text-4xl bg-white text-green-600 px-[2px] rounded-lg w-8'
        />
      </Link>
    </div>
  );
};

export default SocialContacts;
