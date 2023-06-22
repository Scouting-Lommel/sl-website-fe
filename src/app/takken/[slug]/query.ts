import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';

const GROUP_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}

  query getGroupPage($slug: String) {
    groups(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          pageTitle
          subtitle
          pageMeta {
            pageTitle
            pageDescription
            noIndex
            slug
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

export default GROUP_PAGE_QUERY;
