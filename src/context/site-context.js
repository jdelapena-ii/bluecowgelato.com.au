import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const SiteContext = createContext({
  isHeaderActive: false,
  setIsHeaderActive: () => {},
});

function SiteProvider({ children }) {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  return (
    <SiteContext.Provider
      value={{
        isHeaderActive,
        setIsHeaderActive,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

SiteProvider.propTypes = {
  children: PropTypes.node,
};

export { SiteContext, SiteProvider };
