import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import DIVIDER_FRAGMENT from '@/graphql/divider.gql';

const CONTACT_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${DIVIDER_FRAGMENT}

  query {
    contactPage {
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
                  blurhash
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
                    blurhash
                  }
                }
              }
            }
          }
          blocks {
            __typename
            ...HeroBlockFragment
            ...DividerFragment
          }
        }
      }
    }
  }
`;

export default CONTACT_PAGE_QUERY;
