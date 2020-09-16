/**
 * Keep all static queries in this file.
 * Add new queries as necessary.
 * You add aliases if you need to access the same node more than once.
 * The `placeholderImage` is an example of an alias on the `file` node.
 *
 * Example of how to use this hook:
 * import { useGraphQL } from './src/hooks';
 *
 * const { site } = useGraphQL();
 *
 * return <h1>{site.siteMetadata.title}</h1>;
 */

import { graphql, useStaticQuery } from 'gatsby';

function useGraphQL() {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            address {
              line1
              line2
              googleMaps
            }
            email
            title
            social {
              facebook
              instagram
            }
            phone
          }
        }
        allCarouselSlidesJson {
          nodes {
            id
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            subTitle
            title
            url
          }
        }
        cartImage: file(relativePath: { eq: "cart5.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cakeImage: file(relativePath: { eq: "cake5.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutHeroImage: file(relativePath: { eq: "about-hero.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        cakesRequest: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
            relativeDirectory: { eq: "cakes-request" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                id
                fluid(maxWidth: 500, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  );
  return data;
}

export { useGraphQL };
