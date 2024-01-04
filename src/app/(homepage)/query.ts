import gql from 'graphql-tag';
// @ts-ignore
import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
// @ts-ignore
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/graphql/text-image-block.gql';
// @ts-ignore
import GROUPS_BLOCK_FRAGMENT from '@/graphql/groups-block.gql';

const HOMEPAGE_QUERY = gql`
    ${HERO_BLOCK_FRAGMENT}, 
    ${TEXT_IMAGE_BLOCK_FRAGMENT}, 
    ${GROUPS_BLOCK_FRAGMENT}

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
