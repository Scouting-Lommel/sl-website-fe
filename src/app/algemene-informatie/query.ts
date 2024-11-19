import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/graphql/text-image-block.gql';
import FAQ_BLOCK_FRAGMENT from '@/graphql/faq-block.gql';
import YEAR_THEME_BLOCK_FRAGMENT from '@/graphql/year-theme-block.gql';
import MAP_BLOCK_FRAGMENT from '@/graphql/maps-block.gql';
import DIVIDER_FRAGMENT from '@/graphql/divider.gql';
import PAGE_META_FRAGMENT from '@/graphql/page-meta-fragment.gql';
import IMAGE_FRAGEMENT from '@/graphql/image-fragment.gql';

const INFO_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${TEXT_IMAGE_BLOCK_FRAGMENT}
  ${FAQ_BLOCK_FRAGMENT}
  ${YEAR_THEME_BLOCK_FRAGMENT}
  ${MAP_BLOCK_FRAGMENT}
  ${DIVIDER_FRAGMENT}
  ${PAGE_META_FRAGMENT}
  ${IMAGE_FRAGEMENT}

  query {
    infoPage {
      data {
        attributes {
          pageMeta {
            ...PageMetaFragment
          }
          blocks {
            __typename
            ...HeroBlockFragment
            ...TextImageBlockFragment
            ...YearThemeBlockFragment
            ...FAQBlockFragment
            ...MapBlockFragment
            ...DividerFragment
          }
        }
      }
    }
  }
`;

const YEAR_THEME_QUERY = gql`
  ${IMAGE_FRAGEMENT}

  query {
    yearThemes(sort: "endYear:desc", pagination: { limit: 1 }) {
      data {
        attributes {
          title
          description
          link
          image {
            data {
              attributes {
                ...ImageFragment
              }
            }
          }
        }
      }
    }
  }
`;

export { INFO_PAGE_QUERY, YEAR_THEME_QUERY };
