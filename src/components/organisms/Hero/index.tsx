import classNames from 'classnames';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import YearTheme from '@/components/molecules/YearTheme';
import { Hero as HeroProps } from './types';
import styles from './Hero.module.scss';

type Props = HeroProps & React.HTMLAttributes<HTMLElement>;

const Hero = ({ title, subtitle, variant, callToAction, yearTheme, className }: Props) => {
  const heroClassname = classNames([styles['hero'], styles[`hero--${variant}`], className]);

  return (
    <div className={heroClassname}>
      <h1 className={variant === 'simple' ? 't-headline-1-alt' : 't-headline-1'}>
        <Typography data={title} modNoStyle />
      </h1>

      {subtitle && variant === 'simple' && (
        <Typography>
          <p>{subtitle}</p>
        </Typography>
      )}
      {subtitle && variant !== 'simple' && <p className="t-headline-3">{subtitle}</p>}

      {callToAction && callToAction?.length > 0 && (
        <div className={styles['hero__buttons']}>
          {callToAction.map((cta, key) => {
            return <Button key={key} label={cta.label} href={cta.link} variant={cta.variant} />;
          })}
        </div>
      )}

      {yearTheme && (
        <YearTheme image={yearTheme.image.data.attributes} className={styles['hero__year-theme']} />
      )}
    </div>
  );
};

export default Hero;
