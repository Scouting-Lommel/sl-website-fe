'use client';

import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import BlockContainer from '@/components/atoms/BlockContainer';
import Button from '@/components/atoms/Button';
import Loader from '@/components/atoms/Loader';
import Hero from '@/components/organisms/Hero';

interface Provider {
  id: string;
  name: string;
}

const SignInPage: React.FC = (): JSX.Element => {
  const [providers, setProviders] = useState<Record<string, Provider> | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  if (!providers) {
    return (
      <div className="sl-layout">
        <BlockContainer slug="signin-hero">
          <Hero title="Inloggen" subtitle="Let me in, let me iiiiinnn!" variant="simple" />
        </BlockContainer>

        <BlockContainer slug="signin-loading">
          <Loader size="sm" modLabelVisible />
        </BlockContainer>
      </div>
    );
  }

  return (
    <div className="sl-layout">
      <BlockContainer slug="signin-hero">
        <Hero title="Inloggen" subtitle="Let me in, let me iiiiinnn!" variant="simple" />
      </BlockContainer>

      <BlockContainer slug="signin-providers">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button label={`Log in met ${provider.name}`} onClick={() => signIn(provider.id)} />
          </div>
        ))}
      </BlockContainer>
    </div>
  );
};

export default SignInPage;
