import BlockContainer from '@/components/atoms/BlockContainer';
import Hero from '@/components/organisms/Hero';
import Typography from '@/components/atoms/Typography';
import styles from './Unauthorized.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Unauthorized = () => {
  return (
    <BlockContainer variant="light" orientation="default" slug="page-not-found">
      <section className="sl-layout">
        <Hero subtitle="Geen toegang" title="403" variant="simple" className="sl-layout" />
        <Typography className="unauthorized__content">
          <p>Je hebt geen toegang tot deze pagina.</p>
          <p>
            <a href="/">Terug naar de homepagina</a>
          </p>
        </Typography>
      </section>
    </BlockContainer>
  );
};

export default Unauthorized;
