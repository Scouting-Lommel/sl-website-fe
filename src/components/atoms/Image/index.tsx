'use client';

import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Lightbox } from 'react-modal-image';
import { useTranslations } from 'use-intl';
import { Blurhash } from 'react-blurhash';
import { generateImageUrl } from '@/lib/helpers/image';
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
    loadingStrategy === 'lazy' && !imgLoaded && 'image--loading',
    modMaximisable && 'image--maximisable',
    className,
  );

  const imageLoad = () => {
    if (imageRef.current) setImgLoaded(true); // TODO: Check if this is the best way to handle this
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
        style={{ aspectRatio: `${data.width}/${data.height}` }}
        onClick={() => {
          if (modMaximisable) setImgModalActive(true);
        }}
      >
        {!imgLoaded && (
          <Blurhash
            className="image__blur"
            hash={data.blurhash || 'L6PZfSjE.AyE_3t7t7R**0o#DgR4'}
            width={data.width}
            height={data.height}
            style={{ height: '100%', width: '100%' }} // Override default inline styled dimensions
          />
        )}

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
