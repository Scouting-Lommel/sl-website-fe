import gql from 'graphql-tag';
import DIVIDER_FRAGMENT from '@/graphql/divider.gql';
import EVENTS_BLOCK_FRAGMENT from '@/graphql/events-block.gql';
import GROUPS_BLOCK_FRAGMENT from '@/graphql/groups-block.gql';
import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import IMAGE_FRAGMENT from '@/graphql/image-fragment.gql';
import PAGE_META_FRAGMENT from '@/graphql/page-meta-fragment.gql';
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/graphql/text-image-block.gql';

const HOMEPAGE_QUERY = gql`
    ${HERO_BLOCK_FRAGMENT}, 
    ${TEXT_IMAGE_BLOCK_FRAGMENT}, 
    ${GROUPS_BLOCK_FRAGMENT}
    ${EVENTS_BLOCK_FRAGMENT}
    ${DIVIDER_FRAGMENT}
    ${PAGE_META_FRAGMENT}
    ${IMAGE_FRAGMENT}


    query {
      homePage {
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
              ...EventsBlockFragment
              ...DividerFragment
            }
          }
        }
      }
    }
  `;

export { HOMEPAGE_QUERY };
