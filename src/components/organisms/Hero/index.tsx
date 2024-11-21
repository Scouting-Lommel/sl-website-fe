import classNames from 'classnames';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import YearTheme from '@/components/molecules/YearTheme';
import { Hero as HeroProps } from './types';
import styles from './Hero.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = HeroProps & React.HTMLAttributes<HTMLElement>;

const Hero = ({ title, subtitle, variant, callToAction, yearTheme, className }: Props) => {
  const heroClassname = classNames('hero', `hero--${variant}`, className);

  return (
    <div className={heroClassname}>
      <h1
        className={
          variant === 'simple'
            ? 't-headline-1-alt hero__title hero__title--alt'
            : 't-headline-1 hero__title hero__title'
        }
      >
        <Typography data={title} modNoStyle modPreWrap />
      </h1>

      {subtitle && variant === 'simple' && (
        <Typography>
          <p className="hero__subtitle hero__subtitle--alt">{subtitle}</p>
        </Typography>
      )}
      {subtitle && variant !== 'simple' && (
        <p className="t-headline-3 hero__subtitle">{subtitle}</p>
      )}

      {callToAction && callToAction?.length > 0 && (
        <div className="hero__buttons">
          {callToAction.map((cta, key) => {
            return <Button key={key} label={cta.label} href={cta.link} variant={cta.variant} />;
          })}
        </div>
      )}

      {yearTheme && (
        <YearTheme image={yearTheme.image.data.attributes} className="hero__year-theme" />
      )}
    </div>
  );
};

export default Hero;
