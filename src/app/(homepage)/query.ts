import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/lib/api/fragments/hero-block.gql';
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/lib/api/fragments/text-image-block.gql';
import GROUPS_BLOCK_FRAGMENT from '@/lib/api/fragments/groups-block.gql';

const HOMEPAGE_QUERY = gql`
    ${HERO_BLOCK_FRAGMENT}, 
    ${TEXT_IMAGE_BLOCK_FRAGMENT}, 
    ${GROUPS_BLOCK_FRAGMENT}

    query getHomePageQuery {
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

export default HOMEPAGE_QUERY;
