import Link from 'next/link';
import SocialContacts from '@/app/_components/ContactSection/SocialContacts';

const ContactSection = () => {
  return (
    <section className='lg:px-20 px-3 my-6'>
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
          <SocialContacts />
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
