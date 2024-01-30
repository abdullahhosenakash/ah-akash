import facebookIcon from '@/public/facebook.png';
import linkedInIcon from '@/public/linkedin.png';
import githubIcon from '@/public/github.png';
import gmailIcon from '@/public/gmail.png';
import Image from 'next/image';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className='lg:px-20 px-2 my-6'>
      <h2 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto'>
        Contact
      </h2>
      <div className='lg:w-1/2 mx-auto mt-2'>
        <p className='lg:text-center text-justify'>
          As a passionate web developer, I am very much interested in working
          with any company that believes my skills might be useful for them. So
          the contact info might be helpful to reach me in the case.
        </p>
        <div className='flex lg:flex-row flex-col lg:gap-4 gap-1 justify-center items-center mt-4'>
          <div className='text-lg'>Find me on:</div>
          <div className='flex gap-4 items-center'>
            <Link
              href='https://www.facebook.com/abdullahhosen.akash'
              target='_blank'
            >
              <Image src={facebookIcon} alt='facebook' className='w-8' />
            </Link>

            <Link
              href='https://www.linkedin.com/in/md-abdullah-hosen'
              target='_blank'
            >
              <Image src={linkedInIcon} alt='linked' className='w-8' />
            </Link>

            <Link href='https://github.com/abdullahhosenakash' target='_blank'>
              <Image
                src={githubIcon}
                alt='github'
                className='w-8 bg-white rounded'
              />
            </Link>

            <Link href='mailto:abdullahhosenakash@gmail.com' target='_blank'>
              <Image src={gmailIcon} alt='telegram' className='w-8' />
            </Link>
          </div>
        </div>
      </div>
      <Link
        href='/contact'
        className='text-yellow-400 hover:underline text-lg block w-fit mx-auto mt-3'
      >
        More about contact info
      </Link>
    </section>
  );
};

export default ContactSection;
