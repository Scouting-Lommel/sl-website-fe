import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/graphql/text-image-block.gql';
import FAQ_BLOCK_FRAGMENT from '@/graphql/faq-block.gql';
import MAP_BLOCK_FRAGMENT from '@/graphql/maps-block.gql';

const INFO_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${TEXT_IMAGE_BLOCK_FRAGMENT}
  ${FAQ_BLOCK_FRAGMENT}
  ${MAP_BLOCK_FRAGMENT}

  query {
    infoPage {
      data {
        attributes {
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
            ...FAQBlockFragment
            ...MapBlockFragment
          }
        }
      }
    }
  }
`;

export default INFO_PAGE_QUERY;
