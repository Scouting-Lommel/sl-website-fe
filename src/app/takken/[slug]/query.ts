import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/graphql/text-image-block.gql';
import LEADER_BLOCK_FRAGMENT from '@/graphql/leaders-block.gql';
import FILES_BLOCK_FRAGMENT from '@/graphql/files-block.gql';
import ACTIVITY_BLOCK_FRAGMENT from '@/graphql/activities-block.gql';
import DIVIDER_FRAGMENT from '@/graphql/divider.gql';

const GROUP_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${TEXT_IMAGE_BLOCK_FRAGMENT}
  ${LEADER_BLOCK_FRAGMENT}
  ${FILES_BLOCK_FRAGMENT}
  ${ACTIVITY_BLOCK_FRAGMENT}
  ${DIVIDER_FRAGMENT}

  query getGroupPage($slug: String) {
    groups(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          files {
            data {
              attributes {
                ext
                url
                name
                size
              }
            }
          }
          links {
            id
            label
            link
          }
          pageTitle
          subtitle
          leaders {
            data {
              attributes {
                active
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
            ...FilesBlockFragment
            ...ActivityBlockFragment
            ...DividerFragment
          }
        }
      }
    }
  }
`;

const ACTIVITIES_QUERY = gql`
  query getActivities($slug: String, $currDate: Date) {
    activities(
      filters: { group: { slug: { eq: $slug } }, endDate: { gte: $currDate } }
      sort: "startDate:asc"
    ) {
      data {
        attributes {
          title
          startDate
          startTime
          endDate
          endTime
          description
        }
      }
    }
  }
`;

export { ACTIVITIES_QUERY };
export default GROUP_PAGE_QUERY;
