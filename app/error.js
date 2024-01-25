'use client';

export default function Error({ error, reset }) {
  return (
    <div className='text-center mt-12'>
      <h2 className='text-3xl text-red-500'>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
