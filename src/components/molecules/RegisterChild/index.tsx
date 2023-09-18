'use client';

import { RegisterChild as RegisterChildProps } from './types';
import styles from './RegisterChild.css';
import Button from '@/components/atoms/Button';
import { Dispatch, SetStateAction, useState } from 'react';
import Typography from '@/components/atoms/Typography';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = RegisterChildProps & React.HTMLAttributes<HTMLElement>;

const RegisterChild = ({ index, first, prevlink }: Props) => {
  const [nextKid, setNextKid] = useState(false);
  const [tak, setTak] = useState('Kapoenen');
  return (
    <>
      <div className="registerchild">
        <div className="registerchild__card">
          <div className="registerchild__name">
            <label htmlFor={'firstname' + index}>
              <Typography>Voornaam:</Typography>
              <input type="text" id={'firstname' + index} name={'firstname' + index} required />
            </label>
            <label htmlFor={'lastname' + index}>
              <Typography>Achternaam:</Typography>
              <input type="text" id={'lastname' + index} name={'lastname' + index} required />
            </label>
          </div>
          <div className="registerchild__date">
            <label htmlFor={'birthdate' + index}>
              <Typography>Geboortedatum:</Typography>
              <input
                type="date"
                id={'birthdate' + index}
                name={'birthdate' + index}
                onChange={() => {
                  calculateTak(setTak, index);
                }}
                required
              />
            </label>
            <label
              htmlFor={'akabe' + index}
              className="registerchild__date__akabe"
              onChange={() => {
                calculateTak(setTak, index);
              }}
            >
              <input type="checkbox" id={'akabe' + index} name={'akabe' + index} />
              <Typography>Akabe?</Typography>
            </label>
            <div className="registerchild__tak">
              <Typography>Tak:</Typography>
              <Typography>{tak}</Typography>
            </div>
          </div>
          <div className="registerchild__sex">
            <label>
              <Typography>Geslacht:</Typography>
              <div className="registerchild__sex__radio">
                <label htmlFor={'M' + index} className="registerchild__sex__radio__item">
                  <input type="radio" id={'M' + index} name={'Sex' + index} value="m" required />M
                </label>
                <label htmlFor={'V' + index} className="registerchild__sex__radio__item">
                  <input type="radio" id={'V' + index} name={'Sex' + index} value="v" required />V
                </label>
                <label htmlFor={'X' + index} className="registerchild__sex__radio__item">
                  <input type="radio" id={'X' + index} name={'Sex' + index} value="x" required />X
                </label>
              </div>
            </label>
          </div>
        </div>
        <div className="registerchild__add">
          {!nextKid && (
            <div className="registerchild__add__padding">
              <Button
                label="Lid toevoegen"
                onClick={() => {
                  setNextKid(true);
                }}
              />
            </div>
          )}
          {!first && !nextKid && (
            <div className="registerchild__add__padding">
              <Button
                label="Lid verwijderen"
                onClick={() => {
                  prevlink!(false);
                }}
                variant="light"
              />
            </div>
          )}
        </div>
      </div>
      {nextKid && <RegisterChild index={index + 1} key={index + 1} prevlink={setNextKid} />}
    </>
  );
};

const calculateTak = (setTak: Dispatch<SetStateAction<string>>, i: number) => {
  const bday = (document.getElementById('birthdate' + i)! as HTMLInputElement).value;
  const akabe = (document.getElementById('akabe' + i)! as HTMLInputElement).checked;
  if (akabe) {
    setTak('Akabe');
    return;
  }
  if (!bday) return;
  const diff = new Date().getFullYear() - new Date(bday).getFullYear();
  if (diff <= 0) return;
  if (diff < 6) {
    setTak('Niet oud genoeg');
  } else if (diff == 6 || diff == 7) {
    setTak('Kapoenen');
  } else if (diff > 7 && diff < 11) {
    setTak('Welpen');
  } else if (diff > 10 && diff < 14) {
    setTak('Jonggivers');
  } else if (diff > 13 && diff < 17) {
    setTak('Givers');
  } else if (diff == 17) {
    setTak('Jin');
  } else {
    setTak('Leiding');
  }
};

export default RegisterChild;
