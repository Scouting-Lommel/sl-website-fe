import BlockContainer from '@/components/atoms/BlockContainer';
import Hero from '@/components/organisms/Hero';
import Typography from '@/components/atoms/Typography';
import styles from './NotFound.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const NotFound = () => {
  return (
    <BlockContainer variant="light" orientation="default" slug="page-not-found">
      <section className="sl-layout">
        <Hero subtitle="Pagina niet gevonden" title="404" variant="simple" className="sl-layout" />
        <Typography className="not-found__content">
          <p>We hebben de pagina die je zocht, niet gevonden.</p>
          <p>
            <a href="/">Terug naar de homepagina</a>
          </p>
        </Typography>
      </section>
    </BlockContainer>
  );
};

export default NotFound;
