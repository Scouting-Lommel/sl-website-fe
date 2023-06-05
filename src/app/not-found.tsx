import { Metadata } from 'next';
import Link from '@/components/atoms/Link';

export const metadata: Metadata = {
  title: 'Pagina niet gevonden',
};

const GroupPage = async () => {
  return (
    <>
      <section className="sl-layout">
        <h1>404</h1>
        <div>Page Not Found</div>
        <Link href="/" variant="link1">
          <span>Go Home</span>
        </Link>
      </section>
    </>
  );
};

export default GroupPage;
