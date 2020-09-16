import React from 'react';
import PropTypes from 'prop-types';

function GelatoIcon({ accentClass = 'text-white', ...rest }) {
  return (
    <svg fill="currentColor" viewBox="0 0 196.19 283.46" {...rest}>
      <path
        d="M44.55 35.49S65.5 16.73 67.24 15.42s2.62-8.29 10.47-6.11 24.87 6.11 28.36 8.73c3.49 2.62 6.98 10.04 6.98 10.04l-18.76 19.2-12.65 6.98-37.09-18.77z"
        fill="currentColor"
        className={accentClass}
      />
      <path d="M195.58 72.81c-.03-33.44-27.25-60.62-60.68-60.62h-.06c-6.6.01-13.1 1.08-19.35 3.19C99.35-2.57 71.65-4.49 53.17 11.27c-7.11 6.06-12.2 14.33-14.43 23.39-26.35 6.45-42.9 32.91-37 59.53a50.12 50.12 0 0012.56 23.64 18.975 18.975 0 00-1.62 7.61c0 10.25 8.34 18.6 18.6 18.6h7.67L83.48 272.2c1.39 4.18 4.33 7.57 8.27 9.53 2.32 1.16 4.83 1.75 7.36 1.75 1.76 0 3.52-.28 5.24-.86 4.89-1.63 8.79-5.53 10.42-10.4l44.74-128.18h6.59c4.96 0 9.62-1.93 13.14-5.43 3.52-3.51 5.46-8.18 5.46-13.14.01-4.48-1.63-8.83-4.54-12.2 10.02-11.14 15.48-25.44 15.42-40.46zM55.86 144.02h7.83v12.97c0 10.25 8.34 18.6 18.6 18.6s18.6-8.34 18.6-18.6v-2.6c.76.1 1.52.16 2.29.16h.17c7.21 0 13.66-4.09 16.75-10.52h22.29L99.48 267.09l-.1.28v.3c0 .19-.15.34-.34.34s-.34-.15-.34-.34v-.3L55.86 144.02zm49.92-8.07c0 1.35-1.1 2.44-2.44 2.44s-2.44-1.1-2.44-2.44c0-4.45-3.62-8.08-8.08-8.08-4.45 0-8.08 3.62-8.08 8.08v21.04c0 1.35-1.1 2.44-2.44 2.44s-2.44-1.1-2.44-2.44v-21.04c0-4.45-3.62-8.08-8.08-8.08H31.25a2.445 2.445 0 01-2.44-2.45c0-.78.38-1.52 1.01-1.98 2.2-1.38 3.59-3.75 3.73-6.4.05-2.57-1.14-5.03-3.2-6.63-8.57-6.31-13.67-16.42-13.63-27.07 0-18.75 15.26-34.01 34.01-34.01 10.65 0 20.82 5.09 27.2 13.6 1.84 2.48 4.88 3.67 7.93 3.12 3-.58 5.41-2.76 6.28-5.7 6.88-23.57 31.64-37.15 55.22-30.28 18.88 5.51 32.06 23.08 32.06 42.75.06 13.97-6.6 27.28-17.81 35.61a8.022 8.022 0 00-3.16 5.32 7.98 7.98 0 001.53 5.99c1.47 1.96 3.71 3.14 6.22 3.23 1.35 0 2.44 1.1 2.44 2.44 0 1.35-1.1 2.44-2.44 2.44h-52.35c-4.45.02-8.07 3.64-8.07 8.1zM82.33 16.72c6.66 0 13.01 2.28 18.12 6.45a60.996 60.996 0 00-18.71 20.7 50.02 50.02 0 00-25.4-10.28c4.58-10.11 14.74-16.8 25.96-16.87h.03z" />
    </svg>
  );
}

GelatoIcon.propTypes = {
  accentClass: PropTypes.string,
};

export { GelatoIcon };
