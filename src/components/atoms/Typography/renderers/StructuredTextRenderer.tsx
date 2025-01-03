'use client';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import SLImage from '@/components/atoms/Image';
import { StructuredTextRendererProps } from '../types';

const StructuredTextRenderer = ({ data }: StructuredTextRendererProps): JSX.Element => {
  return (
    <BlocksRenderer
      content={data}
      blocks={{
        image: ({ image }) => {
          return <SLImage data={image} />;
        },
      }}
    />
  );
};

export default StructuredTextRenderer;
