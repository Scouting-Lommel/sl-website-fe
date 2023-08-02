'use client';

import { Form as FormProps } from './types';
import Input from '@/components/molecules/Input';
import styles from './Form.css';
import { useState } from 'react';
import Loader from '@/components/atoms/Loader';
import Typography from '@/components/atoms/Typography';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormProps & React.HTMLAttributes<HTMLElement>;

const Form = ({ redirect, action, inputs, formattedResponseMessage, className }: Props) => {
  const [currState, setState] = useState('form'); // form | result | loading
  let [formattedMessage, setFormattedMessage] = useState(formattedResponseMessage); // the formatted message

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setState('loading');

    // Get data from the form
    let data: Record<string, string | number | string[]> = {
      formattedResponseMessage: formattedResponseMessage,
    };
    // add all input data to the data variable
    let uidList: string[] = [];
    inputs.forEach((input) => {
      if (input.type === 'radio') {
        for (let i = 0; i < 15; i++) {
          if (event.target[input.uid + i]?.checked) {
            data[input.uid] = event.target[input.uid + '' + i]?.value;
            break;
          }
        }
      } else if (input.type === 'checkbox') {
        data[input.uid] = event.target[input.uid]?.checked;
      } else {
        data[input.uid] = event.target[input.uid]?.value;
      }
      uidList.push(input.uid);
    });

    data['uidList'] = uidList;

    // Send the data to the nextjs server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api' + action;

    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (response.status != 200) {
      setState('form');
      alert(
        'something went wrong trying to resolve the request:\n Status code:' +
          response.status +
          '\n Error message: ' +
          result.data,
      );
      return;
    }

    // format the formattedResponseMessage with the data
    let tmp = formattedMessage;
    inputs.forEach((input) => {
      tmp = tmp.replace('${' + input.uid + '}', event.target[input.uid]?.value);
    });
    setFormattedMessage(tmp);

    // set the state to show the result
    setState('result');
  };

  return (
    <div className={className}>
      {currState === 'form' && (
        <form onSubmit={(event) => handleSubmit(event)} className="form" noValidate={false}>
          {inputs.map((input, key) => {
            return <Input key={key} redirect={redirect} {...input} />;
          })}
        </form>
      )}
      {currState === 'loading' && (
        <div className="formLoader">
          <Loader />
        </div>
      )}
      {currState === 'result' && <Typography data={formattedMessage} modPreWrap />}
    </div>
  );
};

export default Form;
