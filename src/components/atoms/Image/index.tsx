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
  const imageRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const [imgModalActive, setImgModalActive] = useState<boolean>(false);

  const imageClassNames = classNames(
    'image',
    loadingStrategy === 'lazy' && !imgLoaded && 'image--loading',
    modMaximisable && 'image--maximisable',
    className,
  );

  // Preload the image
  useEffect(() => {
    if (data?.url) {
      const img = new Image();
      img.src = data.url;
      img.onload = () => {
        setImgLoaded(true);
      };
    }
  }, [data?.url]);

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
        <div className="image__blur-container">
          {!imgLoaded && (
            <Blurhash
              className="image__blur"
              hash={data.blurhash || 'L6PZfSjE.AyE_3t7t7R**0o#DgR4'}
              width={data.width}
              height={data.height}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>

        <img
          ref={imageRef}
          className="image__img"
          alt={data?.alternativeText}
          src={generateImageUrl(data?.hash)}
          loading={loadingStrategy}
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
