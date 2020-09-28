import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { NetlifyForm, Input, TextArea, Select } from './form-elements';

function RequestForm() {
  const { register, handleSubmit, errors } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <article className="relative py-4 bg-gold">
      <div className="relative px-2 py-8 lg:px-8">
        <div className="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-2xl">
          <div className="px-4 py-12 shadow-sm sm:px-6 lg:px-8">
            <h2 className="pb-8 text-3xl font-black tracking-wide text-center uppercase text-slate font-display">
              Gelato cake request form
            </h2>
            <NetlifyForm
              handleSubmit={handleSubmit}
              register={register}
              setIsSubmitting={setIsSubmitting}
              action="/success/"
              name="request_form"
              className="w-full max-w-lg mx-auto space-y-4"
            >
              <Input
                name="first_name"
                label="First name"
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
                label="Email address"
                type="email"
                register={register}
                errors={errors}
              />
              <Input
                name="contact_number"
                label="Contact number"
                type="tel"
                register={register}
                errors={errors}
              />
              <Input
                name="date_pickup"
                label="Date of pick up (please allow at least 2 days notice)"
                register={register}
                errors={errors}
              />
              <Input
                name="pickup_date"
                label="Approximate time of pick up"
                register={register}
                errors={errors}
              />
              <Input
                name="allergies_dietary"
                label="Allergies / dietary requirements"
                register={register}
                errors={errors}
              />
              <Select
                name="flavour_1"
                label="Flavour 1"
                options={[
                  'Chocolate',
                  'Cookies and cream',
                  'Mint Choc Chip',
                  'Burnt Caramel',
                  'Snickers',
                  'Passionfruit',
                  'Vanilla Bean',
                  'Coffee',
                  'Ferrero',
                  'Mango Sorbet',
                  'Black Hawaii',
                  'Lemon Sorbet',
                  'Strawberry Sorbet',
                ]}
                register={register}
                errors={errors}
              />
              <Select
                name="flavour_2"
                label="Flavour 2"
                options={[
                  'Chocolate',
                  'Cookies and cream',
                  'Mint Choc Chip',
                  'Burnt Caramel',
                  'Snickers',
                  'Passionfruit',
                  'Vanilla Bean',
                  'Coffee',
                  'Ferrero',
                  'Mango Sorbet',
                  'Black Hawaii',
                  'Lemon Sorbet',
                  'Strawberry Sorbet',
                ]}
                register={register}
                errors={errors}
              />
              <Select
                name="size"
                label="Size"
                defaultValue="Size"
                options={[
                  'Small - 850ml - Approximately 6 people - $38',
                  'Medium - 9L - Approximately 12 people - $55',
                  'Large - 2.4L - Approximately 18 people - $65',
                ]}
                register={register}
                errors={errors}
              />
              <Select
                name="decoration"
                label="Decoration"
                defaultValue="Decoration"
                options={[
                  'Classic Cake',
                  'Lolly Forest',
                  'The Unicorn',
                  'The Mountain - add $2',
                  'Fruit Frenzy - add $2',
                  'The Butterfly - add $2',
                ]}
                register={register}
                errors={errors}
              />
              <TextArea
                name="inquiry"
                label="Custom Order Inquiry (Optional)"
                register={register}
                errors={errors}
                required={false}
              />
              <div className="py-8 text-sm break-words">
                <p>Vegan cakes allow for only one flavor.</p>
                <p>
                  Any flavour outside of our standard range will incur a $7.50
                  fee per flavour.
                </p>
                <p>Prices may vary depending on request.</p>
                <p>Bringing a cool bag is recommended for pick up.</p>
              </div>
              <div className="flex justify-end">
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
      </div>
    </article>
  );
}

export { RequestForm };
