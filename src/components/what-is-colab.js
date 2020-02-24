import React from 'react';
import Image from 'gatsby-image';
import { useGraphQL } from '../hooks/use-graphql';

import Wrapper from './wrapper';
import cornerChevron from '../images/corner-style.svg';

const WhatIsColab = () => {
  const data = useGraphQL();

  return (
    <Wrapper id="about">
      <div className="relative flex flex-wrap pt-20 mx-6">
        <div className="relative w-full px-6 pt-12 border-2 border-gray-600 pb-72 md:py-24 md:pr-12 md:w-1/2">
          <img
            src={cornerChevron}
            alt=""
            className="absolute top-0 left-0 h-16 -mt-3 -ml-3"
          />
          <h2 className="text-4xl leading-none uppercase text-fuschia font-display">
            What Is <br className="hidden md:inline" />
            Colab?
          </h2>
          <p className="mt-8 mb-16">
            Freelance space, meeting place – CoLab is a unique working
            environment for hire at Port Macquarie’s new Sovereign Place Town
            Centre.
            <br />
            <br />
            Join like-minded people at this fresh community hub and work space
            with WiFi, power, cafes and services at your fingertips.
            <br />
            <br />
            Book a hot desk in a peaceful air-conditioned environment, or hire a
            space for your next business or team meeting.
            <br />
            <br />
            After hours and weekend venue hire also available.
            <br />
            <br />
            Whatever your needs, connect at CoLab today!
          </p>
        </div>
        <div className="w-full px-6 py-8 -mb-24 -mt-80 md:h-full md:-ml-12 md:my-auto md:w-1/2">
          <Image fluid={data.whatIsColabInnerImage.childImageSharp.fluid} />
        </div>
      </div>
    </Wrapper>
  );
};

export default WhatIsColab;
