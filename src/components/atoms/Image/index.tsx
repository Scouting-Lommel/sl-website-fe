'use client';

import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { Lightbox } from 'react-modal-image';
import { useTranslations } from 'use-intl';
import { generateImageUrl } from '@/lib/helpers/image';
import { StylesheetLink } from '@/types/StyleSheetLink';
import { Image as ImageProps } from './types';
import styles from './Image.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const SLImage = ({
  data,
  loadingStrategy = 'lazy',
  modMaximisable,
  modWithShadow,
  modRounded,
  modWithCaption,
  className,
}: ImageProps): JSX.Element => {
  const t = useTranslations('common');
  const imageRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const [imgModalActive, setImgModalActive] = useState<boolean>(false);

  const imageWrapperClassNames = cn('image__wrapper', className);

  const imageClassNames = cn(
    'image',
    loadingStrategy === 'lazy' && !imgLoaded && 'image--loading',
    modMaximisable && 'image--maximisable',
    modWithShadow && 'image--with-shadow',
    modRounded && 'image--rounded',
  );

  console.log(data);

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
          alt={data?.alternativeText || undefined}
          src={data?.url}
          loading={loadingStrategy}
        />
        {modWithCaption && data.caption && (
          <figcaption className="image__caption">{data.caption}</figcaption>
        )}
      </picture>
    );
  }

  return (
    <>
      <figure className={imageWrapperClassNames}>
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
            alt={data?.alternativeText || undefined}
            src={generateImageUrl(data?.hash)}
            loading={loadingStrategy}
          />
        </picture>

        {modWithCaption && data.caption && (
          <figcaption className="image__caption">{data.caption}</figcaption>
        )}
      </figure>

      {modMaximisable && imgModalActive && (
        <Lightbox
          large={generateImageUrl(data?.hash)}
          alt={data?.alternativeTex || undefined}
          onClose={() => setImgModalActive(false)}
        />
      )}
    </>
  );
};

export default SLImage;
