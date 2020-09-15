import { useContext } from 'react';

import { SiteContext } from '../context';

function useSiteContext() {
  const context = useContext(SiteContext);
  return context;
}

export { useSiteContext };
