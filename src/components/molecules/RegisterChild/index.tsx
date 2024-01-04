'use client';

import { RegisterChild as RegisterChildProps } from './types';
// @ts-ignore
import styles from './RegisterChild.css';
import Button from '@/components/atoms/Button';
import { Dispatch, SetStateAction, useState } from 'react';
import Typography from '@/components/atoms/Typography';
import Input from '@/components/atoms/FormInput';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = RegisterChildProps & React.HTMLAttributes<HTMLElement>;

const RegisterChild = ({ index, first, prevlink }: Props) => {
  const [nextKid, setNextKid] = useState(false);
  const [tak, setTak] = useState('Kapoenen');
  return (
    <>
      <div className="register-child">
        <div className="register-child__card">
          <div className="register-child__card__name">
            <Input
              label="Voornaam:"
              type="text"
              id={'firstname' + index}
              name={'firstname' + index}
              required
            />
            <Input
              label="Achternaam:"
              type="text"
              id={'lastname' + index}
              name={'lastname' + index}
              required
            />
          </div>
          <div className="register-child__card__date">
            <Input
              label="Geboortedatum:"
              type="date"
              id={'birthdate' + index}
              name={'birthdate' + index}
              onChange={() => {
                calculateTak(setTak, index);
              }}
              required
            />
            <label
              htmlFor={'akabe' + index}
              className="register-child__card__date__akabe"
              onChange={() => {
                calculateTak(setTak, index);
              }}
            >
              <input type="checkbox" id={'akabe' + index} name={'akabe' + index} />
              <Typography>Akabe?</Typography>
            </label>
            <div className="register-child__card__group">
              <Typography>Tak:</Typography>
              <Typography>{tak}</Typography>
            </div>
          </div>
          <div className="register-child__card__sex">
            <label>
              <Typography>Geslacht:</Typography>
              <div className="register-child__card__sex__radio">
                <label htmlFor={'M' + index} className="register-child__card__sex__radio__item">
                  <input type="radio" id={'M' + index} name={'Sex' + index} value="m" required />M
                </label>
                <label htmlFor={'V' + index} className="register-child__card__sex__radio__item">
                  <input type="radio" id={'V' + index} name={'Sex' + index} value="v" required />V
                </label>
                <label htmlFor={'X' + index} className="register-child__card__sex__radio__item">
                  <input type="radio" id={'X' + index} name={'Sex' + index} value="x" required />X
                </label>
              </div>
            </label>
          </div>
        </div>
        <div className="register-child__add">
          {!nextKid && (
            <div className="register-child__add__padding">
              <Button
                label="Lid toevoegen"
                onClick={() => {
                  setNextKid(true);
                }}
              />
            </div>
          )}
          {!first && !nextKid && (
            <div className="register-child__add__padding">
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
