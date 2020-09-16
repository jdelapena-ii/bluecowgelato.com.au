import React from 'react';

import {
  Layout,
  SEO,
  CakesRequest,
  RequestForm,
  HeadingCTA,
  InstagramWidget,
} from '../components';

function OrderNowPage() {
  return (
    <Layout>
      <SEO title="Order Now" />
      <HeadingCTA
        subHeading="Gelato Cakes"
        message="Gelato cakes are perfect for your occasion and celebrations. Please order now!"
      />
      <CakesRequest />
      <RequestForm />
      <InstagramWidget />
    </Layout>
  );
}

export default OrderNowPage;
