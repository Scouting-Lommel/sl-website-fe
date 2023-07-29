import { RadioInput as InputProps } from './types';
import styles from './radio.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const radioInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  return (
    <>
      <label className="radioLabel">
        {title}
        <div className="radioContainer">
          {options.map((option: string) => {
            return (
              <>
                <label className="radioItemLabel" htmlFor={option}>
                  <input
                    className="radioInput"
                    type={type}
                    id={option}
                    name={title}
                    value={option}
                  />
                  {option}
                </label>
              </>
            );
          })}
        </div>
      </label>
    </>
  );
};

export default radioInput;
