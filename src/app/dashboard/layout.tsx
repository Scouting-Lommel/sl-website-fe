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

const DashboardLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

export default DashboardLayout;
