import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import POLICY_BLOCK_FRAGMENT from '@/graphql/policy-block.gql';
import DIVIDER_FRAGMENT from '@/graphql/divider.gql';
import PAGE_META_FRAGMENT from '@/graphql/page-meta-fragment.gql';
import IMAGE_FRAGEMENT from '@/graphql/image-fragment.gql';

const COOKIE_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${POLICY_BLOCK_FRAGMENT}
  ${DIVIDER_FRAGMENT}
  ${PAGE_META_FRAGMENT}
  ${IMAGE_FRAGEMENT}

  query {
    cookiePolicyPage {
      data {
        attributes {
          pageMeta {
            ...PageMetaFragment
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

export default COOKIE_PAGE_QUERY;
