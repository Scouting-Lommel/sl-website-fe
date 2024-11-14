import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/graphql/text-image-block.gql';
import GROUPS_BLOCK_FRAGMENT from '@/graphql/groups-block.gql';
import DIVIDER_FRAGMENT from '@/graphql/divider.gql';
import PAGE_META_FRAGMENT from '@/graphql/page-meta-fragment.gql';
import IMAGE_FRAGEMENT from '@/graphql/image-fragment.gql';

const GROUPS_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}    
  ${TEXT_IMAGE_BLOCK_FRAGMENT}, 
  ${GROUPS_BLOCK_FRAGMENT}
  ${DIVIDER_FRAGMENT}
  ${PAGE_META_FRAGMENT}
  ${IMAGE_FRAGEMENT}


  query {
    groupsPage {
      data {
        attributes {
          pageMeta {
            ...PageMetaFragment
          }
          blocks {
            __typename
            ...HeroBlockFragment
            ...TextImageBlockFragment
            ...GroupsBlockFragment
            ...DividerFragment
          }
        }
      }
    }
  }
`;

export default GROUPS_PAGE_QUERY;
