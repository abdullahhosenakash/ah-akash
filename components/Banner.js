import Image from 'next/image';
import img from '@/public/akash.png';
import TextStateForBanner from '@/components/TextStateForBanner';

const Banner = () => {
  return (
    <section className='mt-6 flex flex-col lg:flex-row-reverse justify-evenly items-center'>
      <Image
        src={img}
        alt='Abdullah Hosen Akash banner'
        className='lg:max-w-sm rounded-lg shadow-2xl'
      />
      <div>
        <h3 className='text-xl uppercase text-yellow-400'>
          Hello, my name is Akash
        </h3>
        <h2 className='lg:text-7xl text-6xl text-white'>I make websites.</h2>
        <p className='text-3xl mt-4 text-white'>
          I am a MERN stack developer. <br /> I love to code
          <TextStateForBanner />
        </p>
      </div>
    </section>
  );
};

export default Banner;
