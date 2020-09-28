import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

function TextArea({
  label,
  name,
  required = true,
  rows = 4,
  register,
  errors,
}) {
  return (
    <div>
      <label htmlFor={name}>
        <span className="sr-only">{label}</span>
        <div className="relative mt-1 shadow-sm">
          <textarea
            id={name}
            name={name}
            rows={rows}
            required={required}
            placeholder={label}
            aria-invalid={!!errors[name]}
            ref={register({
              required: required && (
                <Error message={`${label} is a required field`} />
              ),
            })}
            className={`block w-full px-4 py-2 transition duration-150 ease-in-out rounded-lg form-textarea ${
              errors[name]?.message ? 'border-red-300' : 'border-gray-300'
            }`}
          />
        </div>
      </label>
      {errors[name]?.message}
    </div>
  );
}

TextArea.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  rows: PropTypes.number,
};

export { TextArea };
