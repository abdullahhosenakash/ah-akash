'use client';

import { useEffect, useState } from 'react';

const TextStateForBanner = () => {
  const [textState, setTextState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextState(!textState);
    }, 500);
    return () => clearInterval(interval);
  }, [textState]);

  return <span>{textState && '_'}</span>;
};

export default TextStateForBanner;
