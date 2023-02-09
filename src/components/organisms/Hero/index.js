import classNames from "classnames";
import Title from "@/components/atoms/Title";
import Button from "@/components/atoms/Button";
import styles from "./Hero.module.scss";

const Hero = ({
  title,
  subtitle,
  variant,
  callToAction,
  socialsCta,
  yearTheme,
  bgImage,
  className,
}) => {
  const heroClassname = classNames([styles["hero"], className]);

  return (
    <div className={heroClassname}>
      <Title title={title} variant="h1" modLight modMarkup />
      {subtitle && <Title title={subtitle} style="h3" tagName="p" modAccent />}
      <div className={styles["hero__buttons"]}>
        <Button label="Het jaarthema" />
        <Button label="Inschrijven" variant="light" />
      </div>
    </div>
  );
};

export default Hero;
