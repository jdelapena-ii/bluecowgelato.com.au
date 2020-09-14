import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useSiteContext } from '../hooks';

function HeaderIndicator() {
  const { isHeaderActive, setIsHeaderActive } = useSiteContext();

  const [ref, inView] = useInView({
    threshold: 0,
    trackVisibility: true,
    delay: 100,
  });

  useEffect(() => {
    if (inView) {
      setIsHeaderActive(true);
    } else {
      setIsHeaderActive(false);
    }

    console.log('inView', inView);
    console.log('isHeaderActive', isHeaderActive);
  }, [inView, setIsHeaderActive]);

  return <article ref={ref} />;
}

export { HeaderIndicator };
