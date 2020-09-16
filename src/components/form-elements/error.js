import PropTypes from 'prop-types';
import React from 'react';

function Error({ message }) {
  return (
    <p
      role="alert"
      className="px-4 mt-1 text-xs font-medium tracking-widest text-red-600 uppercase"
    >
      {message}
    </p>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};

export { Error };
