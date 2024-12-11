import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    robots: {
      index: false,
      follow: false,
    },
  };
};

const DashboardLayout = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};

export default DashboardLayout;
