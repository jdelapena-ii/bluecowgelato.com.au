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
      <SEO title="Order Custom Gelato Cakes" />
      <HeadingCTA
        subHeading="Gelato Cakes"
        message="Gelato cakes are perfect for your occasion and celebrations. Order one today!"
      />
      <CakesRequest />
      <RequestForm />
      <InstagramWidget />
    </Layout>
  );
}

export default OrderNowPage;
