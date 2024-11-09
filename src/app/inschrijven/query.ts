import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import DIVIDER_FRAGMENT from '@/graphql/divider.gql';

const REGISTER_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${DIVIDER_FRAGMENT}

  query {
    registerPage {
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

const GENERAL_DATA_FOR_REGISTER_PAGE = gql`
  query {
    generalData {
      data {
        attributes {
          leaderPrice
          memberPrice
          bankAccountNumber
        }
      }
    }
  }
`;

export { REGISTER_PAGE_QUERY, GENERAL_DATA_FOR_REGISTER_PAGE };
