import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/graphql/text-image-block.gql';
import TARIFS_BLOCK_FRAGMENT from '@/graphql/tarifs-block.gql';

const RENTAL_LOCATION_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${TEXT_IMAGE_BLOCK_FRAGMENT}
  ${TARIFS_BLOCK_FRAGMENT}

  query getRentalLocationPage($slug: String) {
    rentalLocations(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          pageTitle
          slug
          description
          pageMeta {
            pageTitle
            pageDescription
            noIndex
            metaImage {
              data {
                attributes {
                  name
                  width
                  height
                  url
                  alternativeText
                  caption
                  formats
                }
              }
            }
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    name
                    width
                    height
                    url
                    alternativeText
                    caption
                    formats
                  }
                }
              }
            }
          }
          blocks {
            __typename
            ...HeroBlockFragment
            ...TextImageBlockFragment
            ...TarifsBlockFragment
          }
        }
      }
    }
  }
`;

export default RENTAL_LOCATION_PAGE_QUERY;
