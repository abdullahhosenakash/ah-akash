import Image from 'next/image';
import img from '@/public/akash.png';
import TextStateForBanner from '@/components/Banner/TextStateForBanner';

const Banner = () => {
  return (
    <section className='mt-6 flex flex-col lg:flex-row-reverse gap-4 lg:gap-0 justify-evenly items-center'>
      <Image
        src={img}
        alt='Abdullah Hosen Akash image'
        className='lg:max-w-sm rounded-lg shadow-2xl'
        priority={true}
      />
      <div>
        <h3 className='text-xl uppercase text-yellow-400'>Hello, I am</h3>
        <h2 className='lg:text-7xl text-6xl text-white'>
          Abdullah Hosen <br /> Akash
        </h2>
        <p className='text-3xl mt-4 text-white'>
          I am a full stack developer. <br /> I love to code
          <TextStateForBanner />
        </p>
      </div>
    </section>
  );
};

export default Banner;
