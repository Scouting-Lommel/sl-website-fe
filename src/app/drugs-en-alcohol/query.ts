import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import POLICY_BLOCK_FRAGMENT from '@/graphql/policy-block.gql';
import DIVIDER_FRAGMENT from '@/graphql/divider.gql';
import IMAGE_FRAGEMENT from '@/graphql/image-fragment.gql';

const DA_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${POLICY_BLOCK_FRAGMENT}
  ${DIVIDER_FRAGMENT}
  ${IMAGE_FRAGEMENT}

  query {
    drugsAlcoholPolicyPage {
      data {
        attributes {
          pageMeta {
            pageTitle
            pageDescription
            noIndex
            metaImage {
              data {
                attributes {
                  ...ImageFragment
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
                    ...ImageFragment
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

export default DA_PAGE_QUERY;
