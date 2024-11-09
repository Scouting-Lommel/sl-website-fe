import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/graphql/text-image-block.gql';
import GROUPS_BLOCK_FRAGMENT from '@/graphql/groups-block.gql';
import DIVIDER_FRAGMENT from '@/graphql/divider.gql';

const HOMEPAGE_QUERY = gql`
    ${HERO_BLOCK_FRAGMENT}, 
    ${TEXT_IMAGE_BLOCK_FRAGMENT}, 
    ${GROUPS_BLOCK_FRAGMENT}
    ${DIVIDER_FRAGMENT}

    query {
      homePage {
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
                    blurhash
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
                      blurhash
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
              ...DividerFragment
            }
          }
        }
      }
    }
  `;

export default HOMEPAGE_QUERY;
