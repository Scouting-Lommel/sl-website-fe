import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import POLICY_BLOCK_FRAGMENT from '@/graphql/policy-block.gql';
import DIVIDER_FRAGMENT from '@/graphql/divider.gql';

const PRIVACY_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${POLICY_BLOCK_FRAGMENT}
  ${DIVIDER_FRAGMENT}

  query {
    privacyPolicyPage {
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
            ...PolicyBlockFragment
            ...DividerFragment
          }
        }
      }
    }
  }
`;

export default PRIVACY_PAGE_QUERY;
