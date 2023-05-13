import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Image as ImageProps } from './types';
import styles from './Image.module.scss';

type Props = ImageProps & React.HTMLAttributes<HTMLElement>;

const SLImage = ({ data, loadingStrategy = 'lazy', className }: Props) => {
  const imageRef = useRef<any>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const imageClassNames = classNames([
    styles['image'],
    loadingStrategy === 'lazy' && !imgLoaded && styles['image--lazy'],
    className,
  ]);

  const imageLoad = () => {
    if (imageRef.current) setImgLoaded(imageRef.current.complete);
  };

  useEffect(() => {
    imageLoad();
  }, []);

  if (!data?.url) {
    return <>Image is not valid</>;
  }

  if (data.ext === '.svg') {
    return (
      <picture className={imageClassNames}>
        <img
          ref={imageRef}
          className={styles['image__img']}
          alt={data?.alternativeText}
          src={data?.url}
          loading={loadingStrategy}
          onLoad={imageLoad}
        />
      </picture>
    );
  }

  return (
    <picture className={imageClassNames}>
      <source media="(max-width: 480px)" srcSet={data?.formats.small.url} />
      <source media="(max-width: 768px)" srcSet={data?.formats.medium.url} />
      <source media="(max-width: 1024px)" srcSet={data?.formats.large.url} />
      <img
        ref={imageRef}
        className={styles['image__img']}
        alt={data?.alternativeText}
        src={data?.url}
        srcSet={data?.url}
        sizes={`(max-width: 480px) ${data.formats.small.width}px, (max-width: 768px) ${data.formats.medium.width}px, (max-width: 1024px) ${data?.formats.large.width}px, ${data?.width}px`}
        loading={loadingStrategy}
        onLoad={imageLoad}
      />
    </picture>
  );
};

export default SLImage;
