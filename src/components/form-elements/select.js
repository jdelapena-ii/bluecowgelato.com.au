import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

function Select({
  defaultValue = '',
  errors,
  label,
  name,
  options = [],
  register,
  required = true,
}) {
  return (
    <div>
      <span className="sr-only">{label}</span>
      <div className="relative mt-1 shadow-sm">
        <select
          id={name}
          name={name}
          defaultValue={label || defaultValue}
          required={required}
          aria-invalid={!!errors[name]}
          ref={register({
            required: required && (
              <Error message={`${label} is a required field`} />
            ),
          })}
          className={`block w-full px-4 py-2 transition duration-150 ease-in-out rounded-lg form-select ${
            errors[name]?.message ? 'border-red-300' : 'border-gray-300'
          }`}
        >
          <option value={label || defaultValue} disabled>
            {label || defaultValue}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {errors[name]?.message}
    </div>
  );
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export { Select };
