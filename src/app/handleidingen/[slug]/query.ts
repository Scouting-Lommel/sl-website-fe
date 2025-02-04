import gql from 'graphql-tag';
import IMAGE_FRAGMENT from '@/graphql/image-fragment.gql';
import PAGE_META_FRAGMENT from '@/graphql/page-meta-fragment.gql';

const MANUAL_PAGE_QUERY = gql`
  ${PAGE_META_FRAGMENT}
  ${IMAGE_FRAGMENT}

  query getManualPage($slug: String) {
    manuals(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          pageMeta {
            ...PageMetaFragment
          }
          updatedAt
          title
          slug
          locked
          description
          body
        }
      }
    }
  }
`;

export { MANUAL_PAGE_QUERY };
