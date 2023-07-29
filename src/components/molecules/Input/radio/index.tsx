import { RadioInput as InputProps } from './types';
import styles from './radio.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const radioInput = ({ label, type, ID, required, options, ...otherOptions }: Props) => {
  return (
    <>
      <label className="radioLabel">
        {label}
        <div className="radioContainer">
          {options.map((option: string, i: number) => {
            return (
              <>
                <label className="radioItemLabel" htmlFor={ID}>
                  <input
                    className="radioInput"
                    type={type}
                    id={ID + i}
                    value={option}
                    {...otherOptions}
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
