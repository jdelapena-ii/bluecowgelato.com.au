import React from 'react';
import PropTypes from 'prop-types';

function BotField({ register }, ...rest) {
  return (
    <>
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label htmlFor="bot-field">
          Don’t fill this out:{' '}
          <input id="bot-field" name="bot-field" ref={register} {...rest} />
        </label>
      </div>
    </>
  );
}

BotField.propTypes = {
  register: PropTypes.func,
};

export { BotField };
