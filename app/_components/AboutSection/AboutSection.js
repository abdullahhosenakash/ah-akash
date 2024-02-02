import Link from 'next/link';

const AboutSection = () => {
  return (
    <section>
      <h3 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto lg:mx-0'>
        About Me
      </h3>
      <p className='text-justify text-lg mt-2'>
        I am Abdullah Hosen Akash, a passionate web developer. I develop web
        applications using JavaScript, as my core skill is based on it. As a
        JavaScript developer, I like to do most of the task i.e. frontend,
        backend using JS. I have graduated with a bachelor&apos;s degree in
        Electronic and Communication Engineering from Hajee Mohammad Danesh
        Science and Technology University, Dinajpur in 2024. I am always free
        for any kind of job opportunity that suits my interests.
      </p>
      <Link
        href='/about'
        className='text-lg text-yellow-400 hover:underline block w-fit lg:mx-0 mx-auto'
      >
        More about me
      </Link>
    </section>
  );
};

export default AboutSection;
