import { useTranslations } from 'next-intl';
import { StylesheetLink } from '@/types/StyleSheetLink';
import BlockContainer from '@/components/atoms/BlockContainer';
import Typography from '@/components/atoms/Typography';
import Hero from '@/components/organisms/Hero';
import styles from './NotFound.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const NotFound = (): JSX.Element => {
  const t = useTranslations('common.notFound');

  return (
    <BlockContainer variant="light" orientation="default" slug="page-not-found">
      <section className="sl-layout">
        <Hero subtitle="Pagina niet gevonden" title="404" variant="simple" className="sl-layout" />
        <Typography className="not-found__content">
          <p>{t('title')}</p>
          <p>
            <a href="/">{t('button.label')}</a>
          </p>
        </Typography>
      </section>
    </BlockContainer>
  );
};

export default NotFound;
