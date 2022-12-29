import { gql } from "@apollo/client";

import HERO_BLOCK_FRAGMENT from "../fragments/hero-block.gql";
import TEXT_IMAGE_BLOCK_FRAGMENT from "../fragments/text-image-block.gql";

const getHomePage = () => {
  return gql`
    ${HERO_BLOCK_FRAGMENT}
    ${TEXT_IMAGE_BLOCK_FRAGMENT}

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
            }
          }
        }
      }
    }
  `;
};

export { getHomePage };
