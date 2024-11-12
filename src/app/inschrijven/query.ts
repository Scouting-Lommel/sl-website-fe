import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import DIVIDER_FRAGMENT from '@/graphql/divider.gql';
import PAGE_META_FRAGMENT from '@/graphql/page-meta-fragment.gql';
import IMAGE_FRAGEMENT from '@/graphql/image-fragment.gql';

const REGISTER_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${DIVIDER_FRAGMENT}
  ${PAGE_META_FRAGMENT}
  ${IMAGE_FRAGEMENT}

  query {
    registerPage {
      data {
        attributes {
          pageMeta {
            ...PageMetaFragment
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
