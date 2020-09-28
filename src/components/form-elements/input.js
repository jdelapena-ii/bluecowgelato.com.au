import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

function Input({
  label,
  name,
  placeholder,
  required = true,
  type = 'text',
  register,
  errors,
}) {
  const MIN_LENGTH = type === 'tel' ? 8 : 2;
  return (
    <div>
      <label htmlFor={name}>
        <span
          className={
            placeholder
              ? 'block text-sm font-medium leading-5 text-gray-700'
              : 'sr-only'
          }
        >
          {label}
        </span>
        <div className="relative mt-1 shadow-sm">
          <input
            id={name}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder || label}
            aria-invalid={!!errors[name]}
            ref={register({
              required: required && <Error message="This field is required" />,
              minLength: {
                value: MIN_LENGTH,
                message: (
                  <Error
                    message={`Must be at least ${MIN_LENGTH} characters`}
                  />
                ),
              },
            })}
            className={`block w-full px-4 py-2 mt-1 transition duration-150 ease-in-out rounded-lg form-input ${
              errors[name]?.message ? 'border-red-300' : 'border-gray-300'
            }`}
          />
        </div>
      </label>
      {errors[name]?.message}
    </div>
  );
}

Input.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export { Input };
