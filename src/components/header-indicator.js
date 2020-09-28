import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useSiteContext } from '../hooks';

function HeaderIndicator() {
  const { setIsHeaderActive } = useSiteContext();

  const [ref, inView] = useInView({
    threshold: 0,
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (!inView) {
      setIsHeaderActive(true);
    } else {
      setIsHeaderActive(false);
    }
  }, [inView, setIsHeaderActive]);

  return <div aria-hidden ref={ref} />;
}

export { HeaderIndicator };
