import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import YearTheme from '@/components/molecules/YearTheme';
import styles from './Hero.module.scss';

const Hero = ({ title, subtitle, variant, callToAction, yearTheme, className }) => {
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

      {callToAction?.length > 0 && (
        <div className={styles['hero__buttons']}>
          {callToAction.map((cta, key) => {
            return <Button key={key} label={cta.label} href={cta.link} variant={cta.variant} />;
          })}
        </div>
      )}

      {yearTheme?.data && (
        <YearTheme
          image={yearTheme.data.attributes.image.data.attributes}
          className={styles['hero__year-theme']}
        />
      )}
    </div>
  );
};

Hero.proptypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'large', 'simple']),
  callToAction: PropTypes.arrayOf(
    PropTypes.shape({ variant: PropTypes.string, label: PropTypes.string, link: PropTypes.string }),
  ),
  yearTheme: PropTypes.object,
};

export default Hero;
