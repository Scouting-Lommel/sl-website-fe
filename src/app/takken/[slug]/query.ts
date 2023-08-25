import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/graphql/text-image-block.gql';
import LEADER_BLOCK_FRAGMENT from '@/graphql/leaders-block.gql';

const GROUP_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${TEXT_IMAGE_BLOCK_FRAGMENT}
  ${LEADER_BLOCK_FRAGMENT}

  query getGroupPage($slug: String) {
    groups(filters: { slug: { eq: $slug }, leaders: { active: { eq: true } } }) {
      data {
        attributes {
          pageTitle
          subtitle
          leaders {
            data {
              attributes {
                firstName
                lastName
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
          }
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
            ...LeadersBlockFragment
          }
        }
      }
    }
  }
`;

export default GROUP_PAGE_QUERY;
