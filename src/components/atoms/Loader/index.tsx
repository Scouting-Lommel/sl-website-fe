import styles from './Loader.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Loader = () => {
  return <div className="loader"></div>;
};

export default Loader;
