import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ContactForm, Input, TextArea, Select } from './form-elements';

function Contact() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <article className="relative overflow-hidden bg-white">
      <div className="relative max-w-xl px-4 py-12 mx-auto bg-gray-50 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="pb-8 text-3xl font-bold tracking-wide text-center uppercase text-slate font-display">
            Get in touch with our team
          </h2>
        </div>
        <div className="gap-12 mt-12 text-center">
          <ContactForm
            handleSubmit={handleSubmit}
            register={register}
            setIsSubmitting={setIsSubmitting}
            action="/success/"
            name="contact_form"
            className="w-full max-w-lg p-6 mx-auto space-y-6 tracking-wide transform bg-white shadow-sm lg:max-w-none md:-translate-y-14"
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
            <div className="sm:col-span-2">
              <p className="object-left">*All fields required</p>
              <span className="inline-flex shadow-sm">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex object-right w-full px-6 py-1 font-bold uppercase text-base  tracking-wide leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-lg hover:bg-gray-700 focus:border-gray-900 active:bg-gray-900 ${
                    isSubmitting ? 'opacity-50 cursor-wait' : ''
                  }`}
                >
                  Submit
                </button>
              </span>
            </div>
          </ContactForm>
        </div>
      </div>
    </article>
  );
}

export { Contact };
