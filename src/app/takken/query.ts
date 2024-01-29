import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/graphql/text-image-block.gql';
import GROUPS_BLOCK_FRAGMENT from '@/graphql/groups-block.gql';

const GROUPS_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}    
  ${TEXT_IMAGE_BLOCK_FRAGMENT}, 
  ${GROUPS_BLOCK_FRAGMENT}

  query {
    groupsPage {
      data {
        attributes {
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
            ...TextImageBlockFragment
            ...GroupsBlockFragment
          }
        }
      }
    }
  }
`;

export default GROUPS_PAGE_QUERY;
