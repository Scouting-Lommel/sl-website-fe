import styles from './loader.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Loader = () => {
  return <div className="loader"></div>;
};

export default Loader;
