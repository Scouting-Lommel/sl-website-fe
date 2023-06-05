import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';

const REGISTER_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}

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
          }
        }
      }
    }
  }
`;

export default REGISTER_PAGE_QUERY;
