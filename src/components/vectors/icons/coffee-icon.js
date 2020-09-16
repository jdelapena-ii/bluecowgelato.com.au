import React from 'react';
import PropTypes from 'prop-types';

function CoffeeIcon({ accentClass = 'text-white', ...rest }) {
  return (
    <svg fill="currentColor" viewBox="0 0 216.26 283.46" {...rest}>
      <path
        d="M8.84 45.53s-2.18 29.24.87 29.24 197.24-.87 197.24-.87l-.44-30.98L8.84 45.53z"
        fill="currentColor"
        className={accentClass}
      />
      <path d="M205.13 29.66h-29.16V9.93c0-4.94-4.01-8.95-8.95-8.95H49.06c-4.94 0-8.95 4.01-8.95 8.95v19.73H10.95C6.01 29.66 2 33.67 2 38.61v34.7c0 4.94 4.01 8.95 8.95 8.95h4.69L41.2 275.67c.58 4.5 4.43 7.77 8.85 7.77l115.98.03c4.79 0 8.71-3.77 8.94-8.51l25.47-192.7h4.69c4.94 0 8.95-4.01 8.95-8.95v-34.7c0-4.94-4.01-8.95-8.95-8.95zM58.01 18.88h100.06v10.78H58.01V18.88zm124.43 63.38l-24.23 183.3H57.86L33.63 82.26h148.81zm13.74-17.9H19.9v-16.8h176.28v16.8z" />
    </svg>
  );
}

CoffeeIcon.propTypes = {
  accentClass: PropTypes.string,
};

export { CoffeeIcon };
