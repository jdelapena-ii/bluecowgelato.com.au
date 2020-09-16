import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { NetlifyForm, Input, TextArea, Select } from './form-elements';

function Contact({ bgColorClass }) {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <article
      className={`relative px-4 py-12 sm:px-6 md:px-8 ${
        bgColorClass || 'bg-slate'
      }`}
    >
      <div className="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-2xl">
        <div className="px-4 py-12 shadow-sm sm:px-6 lg:px-8">
          <h2 className="pb-8 text-3xl font-normal tracking-wide text-center uppercase text-slate font-display">
            Get in touch with our team
          </h2>
          <NetlifyForm
            handleSubmit={handleSubmit}
            register={register}
            setIsSubmitting={setIsSubmitting}
            action="/success/"
            name="contact_form"
            className="w-full max-w-lg mx-auto space-y-6"
          >
            <Input
              name="first_name"
              label="First Name"
              register={register}
              errors={errors}
            />
            <Input
              name="last_name"
              label="Last name"
              register={register}
              errors={errors}
            />
            <Input
              name="email"
              label="Email Address"
              type="email"
              isFullWidth
              register={register}
              errors={errors}
            />
            <Input
              name="contact_number"
              label="Contact number"
              type="tel"
              isFullWidth
              register={register}
              errors={errors}
            />
            <Select
              name="subject"
              label="Subject"
              defaultValue="Subject (Please select one)"
              options={['Option 01', 'Option 02', 'Option 03', 'Option 04']}
              isFullWidth
              register={register}
              errors={errors}
            />
            <TextArea
              name="message"
              label="Your Message"
              register={register}
              errors={errors}
            />
            <div className="flex justify-between">
              <p>*All fields required</p>
              <span className="inline-flex shadow-sm">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex w-full px-6 py-1 text-xl font-black leading-6 tracking-wide text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-lg font-display hover:bg-gray-700 focus:border-gray-900 active:bg-gray-900 ${
                    isSubmitting ? 'opacity-50 cursor-wait' : ''
                  }`}
                >
                  Submit
                </button>
              </span>
            </div>
          </NetlifyForm>
        </div>
      </div>
    </article>
  );
}

Contact.propTypes = {
  bgColorClass: PropTypes.string,
};
export { Contact };
