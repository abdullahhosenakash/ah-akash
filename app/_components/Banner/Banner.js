import Image from 'next/image';
import img from '@/app/_assets/images/akash.png';
import TextStateForBanner from '@/app/_components/Banner/TextStateForBanner';

const Banner = () => {
  return (
    <section className='mt-6 flex flex-col lg:flex-row-reverse gap-3 lg:gap-0 justify-evenly items-center lg:px-20 px-3'>
      <Image
        src={img}
        alt='Abdullah Hosen Akash image'
        className='lg:max-w-sm rounded-lg shadow-2xl'
        priority={true}
      />
      <div>
        <h3 className='text-xl uppercase text-yellow-400'>
          Hello, my name is Akash
        </h3>
        <h2 className='lg:text-7xl text-6xl text-white'>I make websites.</h2>
        <p className='text-3xl mt-4 text-white'>
          I am a full stack developer. <br /> I love to code
          <TextStateForBanner />
        </p>
      </div>
    </section>
  );
};

export default Banner;
