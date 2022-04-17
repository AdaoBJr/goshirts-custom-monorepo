import { useEffect } from 'react';

interface useEventListenerProps {
  target: Window;
  event: string;
  listener: EventListenerOrEventListenerObject;
  options?: boolean | AddEventListenerOptions;
}

const useEventListener = (props: useEventListenerProps) => {
  const { target, event, listener, options } = props;

  useEffect(() => {
    if (!target || typeof target.addEventListener !== 'function') return;
    target.addEventListener(event, listener, options);

    return () => {
      target.removeEventListener(event, listener, options);
    };
  }, [target, event, listener, options]);
};

export default useEventListener;
