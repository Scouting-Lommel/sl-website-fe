declare module '*.css';

declare module '*.gql' {
  import { DocumentNode } from 'graphql';

  const value: DocumentNode;
  export = value;
}

declare module 'react-modal-image' {
  import { Component, ReactNode } from 'react';

  interface ModalImageProps {
    small?: string;
    medium?: string;
    large?: string;
    alt?: string;
    onClose?: () => void;
  }

  export class Lightbox extends Component<ModalImageProps, any> {
    constructor(props: ModalImageProps);
    render(): ReactNode;
  }
}
