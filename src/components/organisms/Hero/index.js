import classNames from 'classnames';
import PropTypes from 'prop-types';
import Title from '@/components/atoms/Title';
import Button from '@/components/atoms/Button';
import styles from './Hero.module.scss';

const Hero = ({ title, subtitle, variant, callToAction, socialsCta, yearTheme, className }) => {
  const heroClassname = classNames([styles['hero'], className]);

  return (
    <div className={heroClassname}>
      <Title title={title} variant="h1" modLight modMarkup />
      {subtitle && <Title title={subtitle} style="h3" tagName="p" modAccent />}
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
  socialsCta: PropTypes.object,
  yearTheme: PropTypes.object,
};

export default Hero;
