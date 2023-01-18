import classNames from "classnames";
import styles from "./Image.module.scss";

const SLImage = ({ data, className }) => {
  if (!data.url) {
    return "Image is not valid";
  }

  const imageClassNames = classNames([styles["image"], className]);

  return (
    <picture className={imageClassNames}>
      <source media="(max-width: 480px)" srcSet={data?.formats.small.url} />
      <source media="(max-width: 768px)" srcSet={data?.formats.medium.url} />
      <source media="(max-width: 1024px)" srcSet={data?.formats.large.url} />
      <img
        alt={data?.alternativeText}
        src={data?.url}
        srcSet={data?.formats.large.url}
        sizes={`(max-width: 480px) ${data.formats.small.width}, (max-width: 768px) ${data.formats.medium.width}, ${data?.formats.large.url}`}
        loading="lazy"
      />
    </picture>
  );
};

export default SLImage;
