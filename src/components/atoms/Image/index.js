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
      {/* <div className="basis-1/2 h-auto relative">
            <Image
                loader={myLoader}
                src={args.data.attributes.url}
                quality={100}
                layout="intrinsic"
                width={300}
                height={300}
            />
        </div> */}
    </>
  );
};

const Loader = ({ src, width, quality }) => {
  return `${src}?w=${width}`;
};

export default Image;
