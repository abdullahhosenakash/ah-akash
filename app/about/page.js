import Link from 'next/link';
import SocialContacts from '@/app/_components/ContactSection/SocialContacts';
import Image from 'next/image';
import ahAkash from '@/app/_assets/images/ah-akash.jpg';
import educationIcon from '@/app/_assets/icons/education.png';
import workerIcon from '@/app/_assets/icons/worker.png';
import pastimesIcon from '@/app/_assets/icons/pastimes.png';

const About = () => {
  return (
    <section className='lg:px-20 px-3 my-4'>
      <h2 className='lg:text-[7rem] text-6xl text-center'>Hey there.</h2>
      <h3 className='lg:text-[4rem] text-3xl text-center lg:mt-3'>
        Wanna know about me?
      </h3>

      {/* personal info */}
      <div className='flex lg:flex-row flex-col-reverse lg:gap-4 gap-3 items-center lg:w-3/4 mx-auto lg:mt-6 mt-3 lg:text-lg'>
        <p className='lg:text-justify text-center lg:w-3/4'>
          I am Abdullah Hosen Akash, a full stack web developer based in
          Jashore, Bangladesh. I have been building stuff on the web since 2022
          and done many projects based on frontend, backend and full stack
          technologies. My focus is on creating engaging, accessible &
          performant interfaces for my clients.
        </p>
        <div className='lg:w-1/4'>
          <Image src={ahAkash} alt='' className='rounded-xl' priority />
        </div>
      </div>

      <div className='lg:w-3/4 mx-auto lg:mt-6 mt-3'>
        {/* Academic Carrier */}
        <div>
          <h3 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto'>
            Academic Carrier
          </h3>
          <div className='flex lg:flex-row-reverse flex-col-reverse lg:gap-4 gap-3 items-center mx-auto lg:text-lg'>
            <p className='lg:text-lg lg:text-justify text-center'>
              In the case of academic role, I have completed my graduation with
              the degree of{' '}
              <span className='italic'>
                Bachelor of Science (Engineering) in Electronics and
                Communication Engineering
              </span>
              , abbreviated as{' '}
              <span className='italic'>B.Sc. (Engineering) in ECE</span> from{' '}
              <Link
                href='https://www.hstu.ac.bd'
                target='_blank'
                className='italic text-yellow-400 hover:underline'
              >
                Hajee Mohammad Danesh Science and Technology University (HSTU),
                Dinajpur, Bangladesh
              </Link>{' '}
              in 2024. As a fresher graduate, my academic carrier has already
              changed to be a professional one.
            </p>
            <div className='w-full lg:mt-0 mt-3'>
              <Image
                src={educationIcon}
                alt=''
                className='rounded-xl mx-auto'
              />
            </div>
          </div>
        </div>

        {/* Professional Role */}
        <div>
          <h3 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto lg:mt-6 mt-3'>
            Professional Role
          </h3>
          <div className='flex lg:flex-row flex-col-reverse lg:gap-4 gap-3 items-center mx-auto lg:text-lg'>
            <p className='lg:text-lg lg:text-justify text-center'>
              As a fresh web developer, I am currently working for self
              development for the new era. Besides in offline, I usually teach
              some students as a private tutor. I love to teach others what I
              know in any specific topic.
            </p>
            <div className='w-1/2 lg:mt-0 mt-3'>
              <Image src={workerIcon} alt='' className='rounded-xl mx-auto' />
            </div>
          </div>
        </div>

        {/* Pastimes */}
        <div>
          <h3 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto lg:mt-6 mt-3'>
            Pastimes
          </h3>
          <div className='flex lg:flex-row-reverse flex-col-reverse lg:gap-4 gap-3 items-center mx-auto lg:text-lg'>
            <p className='lg:text-lg lg:text-justify text-center'>
              It is very hard for human beings to write code all the times. I am
              not any other beings (LOL). I like to spend time with my family
              and make fun with my family members. Furthermore, I love having
              fun with my friends.
            </p>
            <div className='w-1/2 lg:mt-0 mt-3'>
              <Image src={pastimesIcon} alt='' className='rounded-xl mx-auto' />
            </div>
          </div>
        </div>

        {/* Virtual Life */}
        <div>
          <h3 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto lg:mt-6 mt-3'>
            Virtual Life
          </h3>
          <p className='lg:text-lg text-center'>
            You can find me in the era of internet by following the below links.
          </p>
          <div className='w-fit mx-auto mt-2'>
            <SocialContacts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
