import { useState } from 'react';
import { useEventListener } from '.';

interface getSizeReturn {
  innerHeight: Number;
  innerWidth: Number;
  outerHeight: Number;
  outerWidth: Number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<getSizeReturn>(getSize());

  function getSize() {
    return {
      innerHeight: window.innerHeight || 1920,
      innerWidth: window.innerWidth || 1080,
      outerHeight: window.outerHeight || 1920,
      outerWidth: window.outerWidth || 1080
    };
  }

  const handleResize = () => setWindowSize(getSize());

  useEventListener({ target: window, event: 'resize', listener: handleResize });

  return { windowSize, handleResize };
};

export default useWindowSize;
