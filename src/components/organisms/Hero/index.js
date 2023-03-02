import classNames from 'classnames';
import PropTypes from 'prop-types';
import Title from '@/components/atoms/Title';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import styles from './Hero.module.scss';

const Hero = ({ title, subtitle, variant, callToAction, yearTheme, className }) => {
  const heroClassname = classNames([styles['hero'], className]);

  return (
    <div className={heroClassname}>
      <Title
        title={title}
        variant="h1"
        style={variant === 'simple' ? 'h1-alt' : 'h1'}
        modLight={variant !== 'simple'}
        modPrimary={variant === 'simple'}
        modMarkup
      />
      {subtitle && (
        <Typography>
          <p>{subtitle}</p>
        </Typography>
      )}
      <div className={styles['hero__buttons']}>
        {callToAction &&
          callToAction.map((cta, key) => {
            return (
              <Button key={key} label={cta.label} href={cta.link} variant={cta.variant} modLink />
            );
          })}
      </div>
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
