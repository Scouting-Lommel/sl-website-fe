// @ts-nocheck
import gql from 'graphql-tag';

import HERO_BLOCK_FRAGMENT from '@/graphql/hero-block.gql';
import TEXT_IMAGE_BLOCK_FRAGMENT from '@/graphql/text-image-block.gql';
import GALLERY_BLOCK_FRAGMENT from '@/graphql/gallery-block.gql';
import TARIFS_BLOCK_FRAGMENT from '@/graphql/tarifs-block.gql';
import CALENDAR_BLOCK_FRAGMENT from '@/graphql/calendar-block.gql';

const RENTAL_LOCATION_BOOKINGS_QUERY = gql`
  query getRentalLocationBookings($slug: String) {
    bookings(filters: { rental_location: { slug: { eq: $slug } } }) {
      data {
        id
        attributes {
          start
          end
          title
        }
      }
    }
  }
`;

const RENTAL_LOCATION_PAGE_QUERY = gql`
  ${HERO_BLOCK_FRAGMENT}
  ${TEXT_IMAGE_BLOCK_FRAGMENT}
  ${GALLERY_BLOCK_FRAGMENT}
  ${TARIFS_BLOCK_FRAGMENT}
  ${CALENDAR_BLOCK_FRAGMENT}

  query getRentalLocationPage($slug: String) {
    rentalLocations(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          pageTitle
          slug
          description
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
            ...GalleryBlockFragment
            ...TarifsBlockFragment
            ...CalendarBlockFragment
          }
        }
      }
    }
  }
`;

export { RENTAL_LOCATION_BOOKINGS_QUERY, RENTAL_LOCATION_PAGE_QUERY };
