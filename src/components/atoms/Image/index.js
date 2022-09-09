import NextImage from "next/image";

// to use this properly, the encompasing div needs a relative style attribute and a size attribute
const Image = ({ src, styling }) => {
  if (!src) return <>not a valid image</>;

  return (
    <>
      <NextImage
        loader={Loader}
        src={src}
        quality={100}
        layout="fill"
        className={styling}
        alt="No valid image"
      />
    </>
  );
};

const Loader = ({ src, width, quality }) => {
  return `${src}?w=${width}`;
};

export default Image;
