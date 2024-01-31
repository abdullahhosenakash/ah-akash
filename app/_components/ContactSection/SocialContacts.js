import Image from 'next/image';
import Link from 'next/link';
import facebookIcon from '@/public/facebook.png';
import linkedInIcon from '@/public/linkedin.png';
import githubIcon from '@/public/github.png';
import gmailIcon from '@/public/gmail.png';
import twitterIcon from '@/public/twitter.png';

const SocialContacts = () => {
  return (
    <div className='flex gap-4 items-center'>
      <Link href='https://www.facebook.com/abdullahhosen.akash' target='_blank'>
        <Image src={facebookIcon} alt='facebook' className='w-8' />
      </Link>

      <Link
        href='https://www.linkedin.com/in/md-abdullah-hosen'
        target='_blank'
      >
        <Image src={linkedInIcon} alt='linked' className='w-8' />
      </Link>

      <Link href='https://twitter.com/MdAbdullahHosen' target='_blank'>
        <Image
          src={twitterIcon}
          alt='twitter'
          className='w-8 bg-white rounded border border-black'
        />
      </Link>

      <Link href='https://github.com/abdullahhosenakash' target='_blank'>
        <Image src={githubIcon} alt='github' className='w-8 bg-white rounded' />
      </Link>

      <Link href='mailto:abdullahhosenakash@gmail.com' target='_blank'>
        <Image src={gmailIcon} alt='telegram' className='w-8' />
      </Link>
    </div>
  );
};

export default SocialContacts;
