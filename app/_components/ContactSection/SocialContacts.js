import Image from 'next/image';
import Link from 'next/link';
import facebookIcon from '@/app/_assets/icons/facebook.png';
import linkedInIcon from '@/app/_assets/icons/linkedin.png';
import githubIcon from '@/app/_assets/icons/github.png';
import gmailIcon from '@/app/_assets/icons/gmail.png';
import twitterIcon from '@/app/_assets/icons/twitter.png';

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
