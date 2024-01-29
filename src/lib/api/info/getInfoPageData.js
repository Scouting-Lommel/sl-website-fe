import { gql } from '@apollo/client';

import HERO_BLOCK_FRAGMENT from '../fragments/hero-block.gql';

const getInfoPageData = () => {
  return gql`
    ${HERO_BLOCK_FRAGMENT}

    query {
      infoPage {
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
            }
          }
        }
      }
    }
  `;
};

export default getInfoPageData;
