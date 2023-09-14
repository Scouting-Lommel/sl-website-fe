'use client';

import { Gallery as GalleryProps } from './types';
import styles from './Gallery.css';
import SLImage from '@/components/atoms/Image';
import { useState } from 'react';
import Button from '@/components/atoms/Button';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = GalleryProps & React.HTMLAttributes<HTMLElement>;

const Gallery = ({ title, initialItems, images }: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <h2 className="t-headline-2 t-align-center">{title}</h2>
      <div className="gallery--imagecontainer">
        {!isOpen &&
          [...Array(initialItems)].map((_, i) => {
            if (images.data.length > i) {
              return (
                <SLImage
                  key={i}
                  data={images.data[i].attributes}
                  loadingStrategy={'lazy'}
                  className="Gallery--image"
                />
              );
            }
            return <></>;
          })}
        {isOpen && <></>}
      </div>
      <div className="gallery--button">
        <Button
          label={isOpen ? "Bekijk minder foto's" : "Bekijk alle foto's"}
          onClick={() => {
            setOpen(!isOpen);
          }}
        />
      </div>
    </div>
  );
};

export default Gallery;
