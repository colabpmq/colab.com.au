import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Booking from '../components/booking';
import Pricing from '../components/pricing';
import Contact from '../components/contact';
import FullImage from '../components/full-image';

import useGraphql from '../hooks/use-graphql';

const IndexPage = () => {
  const data = useGraphql();

  return (
    <Layout home>
      <SEO title="CoLab" />
      <Hero />
      <Booking />
      <FullImage img={data.bookingImage} />
      <Pricing />
      <FullImage img={data.pricingImage} />
      <FullImage img={data.whatIsColabImage} />
      <Contact />
      <FullImage img={data.contactUsImage} />
    </Layout>
  );
};

export default IndexPage;
