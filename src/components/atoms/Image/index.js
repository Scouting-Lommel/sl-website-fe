import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';

const SLImage = ({ data, loadingStrategy, className }) => {
  const imageRef = useRef(null);
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
    return 'Image is not valid';
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

SLImage.propTypes = {
  data: PropTypes.object.isRequired,
  loadingStrategy: PropTypes.oneOf(['lazy', 'eager']),
};

SLImage.defaultProps = {
  loadingStrategy: 'lazy',
};

export default SLImage;
