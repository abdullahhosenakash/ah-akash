import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='text-center mt-12'>
      <h2 className='text-3xl text-red-500'>
        Sorry, the requested resource was not found
      </h2>
      <Link href='/' className='text-yellow-400 hover:underline text-lg'>
        Return Home
      </Link>
    </div>
  );
}
