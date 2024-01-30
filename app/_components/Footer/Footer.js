const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='lg:py-6 py-2 bg-gray-800 text-slate-400 text-lg flex lg:flex-row flex-col lg:items-start items-center justify-center lg:gap-2'>
      Copyright &copy; {year}{' '}
      <div className='lg:p-[1px] px-20 lg:h-4 h-[2px] lg:mt-1 bg-slate-400' />{' '}
      All Rights Reserved
    </footer>
  );
};

export default Footer;
