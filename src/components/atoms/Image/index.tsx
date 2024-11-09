'use client';

import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Lightbox } from 'react-modal-image';
import { useTranslations } from 'use-intl';
import { generateImageUrl } from '@/lib/helpers/generateImageUrl';
import { Image as ImageProps } from './types';
import styles from './Image.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ImageProps & React.HTMLAttributes<HTMLElement>;

const SLImage = ({ data, loadingStrategy = 'lazy', modMaximisable, className }: Props) => {
  const t = useTranslations('common');
  const imageRef = useRef<any>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgModalActive, setImgModalActive] = useState(false);

  const imageClassNames = classNames(
    'image',
    loadingStrategy === 'lazy' && !imgLoaded && 'image--lazy',
    modMaximisable && 'image--maximisable',
    className,
  );

  const imageLoad = () => {
    if (imageRef.current) setImgLoaded(imageRef.current.complete);
  };

  useEffect(() => {
    imageLoad();
  }, []);

  if (!data?.url) {
    return <>{t('imageNotFound')}</>;
  }

  if (data.ext === '.svg') {
    return (
      <picture className={imageClassNames}>
        <img
          ref={imageRef}
          className="image__img"
          alt={data?.alternativeText}
          src={data?.url}
          loading={loadingStrategy}
          onLoad={imageLoad}
        />
      </picture>
    );
  }

  return (
    <>
      <picture
        className={imageClassNames}
        onClick={() => {
          if (modMaximisable) setImgModalActive(true);
        }}
      >
        <source media="(max-width: 480px)" srcSet={generateImageUrl(data?.formats?.small?.hash)} />
        <source media="(max-width: 768px)" srcSet={generateImageUrl(data?.formats?.medium?.hash)} />
        <source media="(max-width: 1024px)" srcSet={generateImageUrl(data?.formats?.large?.hash)} />
        <img
          ref={imageRef}
          className="image__img"
          alt={data?.alternativeText}
          src={data?.url}
          srcSet={data?.url}
          sizes={`(max-width: 480px) ${data?.formats?.small?.width}px, (max-width: 768px) ${data?.formats?.medium?.width}px, (max-width: 1024px) ${data?.formats?.large?.width}px, ${data?.width}px`}
          loading={loadingStrategy}
          onLoad={imageLoad}
        />
      </picture>

      {modMaximisable && imgModalActive && (
        <Lightbox
          small={generateImageUrl(data?.formats?.small?.hash)}
          medium={generateImageUrl(data?.formats?.medium?.hash)}
          large={generateImageUrl(data?.formats?.large?.hash)}
          alt={data?.alternativeText}
          onClose={() => setImgModalActive(false)}
        />
      )}
    </>
  );
};

export default SLImage;
