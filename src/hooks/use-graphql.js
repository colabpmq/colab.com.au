import { useStaticQuery, graphql } from 'gatsby';

const useGraphql = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          addressFirstLine
          addressSecondLine
          ABN
          phone
          email
          hours
          facebook
          googleMapsEmbedUrl
        }
      }
      heroImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bookingImage: file(relativePath: { eq: "booking.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pricingImage: file(relativePath: { eq: "pricing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      whatIsColabImage: file(relativePath: { eq: "what-is-colab.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      contactUsImage: file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return data;
};

export default useGraphql;
